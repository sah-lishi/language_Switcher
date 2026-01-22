import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function LanguageProvider({children}) {
    const [fromLanguage, setFromLanguage] = useState("en")
    const [toLanguage, setToLanguage] = useState("hi")

    const changeFrom = (from) => {
        setFromLanguage(from)
    }
    const changeTo = (to) => {
        setToLanguage(to)
    }

    const swapLanguage = () => {
        setFromLanguage(toLanguage)
        setToLanguage(fromLanguage)
    }
    
    return (
        <LanguageContext.Provider value={{fromLanguage, toLanguage, changeFrom, changeTo, swapLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}