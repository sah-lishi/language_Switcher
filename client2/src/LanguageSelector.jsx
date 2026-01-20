import { useLanguage } from "./useLanguage"
import { languages } from "./config/languages"

export function LanguageSelector() {
    const {fromLanguage, toLanguage, changeFrom, changeTo} = useLanguage()
    const lang = languages()
    return (
        <div className="flex gap-4">
            <select
                className="flex-1 rounded-lg px-3 py-2 bg-gray-100 outline-none"
                value={fromLanguage}
                onChange={(e) => {changeFrom(e.target.value)}}> 
                {lang.map(l => (
                    <option key={l.code} value={l.code}>{l.label}</option>
                ))}     
            </select>
            <select
                className="flex-1 rounded-lg px-3 py-2 bg-gray-100 outline-none"
                value={toLanguage}
                onChange={(e) => {changeTo(e.target.value)}}>  
                {lang.map(l => (
                    <option key={l.code} value={l.code}>{l.label}</option>
                ))}  
            </select>
        </div>
    )
}