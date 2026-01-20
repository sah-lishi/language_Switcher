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
    
    return (
        <LanguageContext.Provider value={{fromLanguage, toLanguage, changeFrom, changeTo}}>
            {children}
        </LanguageContext.Provider>
    )
}