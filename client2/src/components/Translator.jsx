import { useState } from "react"
import { useLanguage } from "../hooks/useLanguage"

export function Translator() {
    const [inputText, setInputText] = useState("")
    const [translatedText, setTranslatedText] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const {fromLanguage, toLanguage} = useLanguage()

    const handleTranslate = async() => {
        if(!inputText.trim()) {
            setTranslatedText("")
            setError("Enter some text")
            return
        }
        setLoading(true)
        setError(null)
        // api call is incomplete now
        try {
            const response = await fetch("http://localhost:5000/api/translate", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    text: inputText,
                    source: fromLanguage,
                    target: toLanguage,
                })
            })
            
            if(!response.ok){
                const errorText = await response.text();
                console.error("API error:", errorText);
                throw new Error("Translation failed");
            }
            // console.log("AWS raw response:", response);


            const data = await response.json()
            // console.log(data);
            
            setTranslatedText(data.translatedText)

        } catch (error) {
            setError("Translation failed. Please try again.")
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <div className="flex flex-col gap-4">
            <textarea className="w-full h-28 p-2 border rounded-lg bg-gray-100 resize-none outline-none"
                name="sent" 
                value={inputText} 
                placeholder="Enter Text"
                onChange={(e) => {setInputText(e.target.value)}}/>
                  
            <textarea placeholder="Translated text appear here" className="w-full h-28 p-2 border rounded-lg bg-gray-100 resize-none outline-none" readOnly value={translatedText}/>

            {error && <p className="text-red-400 text-sm">{error}</p>}
            
            <div className="flex justify-center">
                <button className="self-start px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-60" onClick={handleTranslate} disabled={loading}>{loading ? "Translating.." : "Translate"}</button>           
            </div>
        </div>
    )
}