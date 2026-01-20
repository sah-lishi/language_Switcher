import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function useLanguage() {
    const contextObj = useContext(LanguageContext)
    if(!contextObj)
        throw console.error("useLanguage must be used inside LanguageProvider");
        
    return contextObj
}