import { useLanguage } from "../hooks/useLanguage"
import { languages } from "../config/languages"

export function LanguageSelector() {
    const {fromLanguage, toLanguage, changeFrom, changeTo, swapLanguage} = useLanguage()
    const lang = languages()
    return (
        <div className="flex gap-0">
            <select
                className="flex-1 rounded-l-lg px-3 py-2 bg-gray-100 outline-none"
                value={fromLanguage}
                onChange={(e) => {changeFrom(e.target.value)}}> 
                {lang.map(l => (
                    <option key={l.code} value={l.code}>{l.label}</option>
                ))}     
            </select>
            <button onClick={swapLanguage} className="px-5 py-2 bg-blue-500 active:scale-95">⇄</button>
            <select
                className="flex-1 rounded-r-lg px-3 py-2 bg-gray-100 outline-none"
                value={toLanguage}
                onChange={(e) => {changeTo(e.target.value)}}>  
                {lang.map(l => (
                    <option key={l.code} value={l.code}>{l.label}</option>
                ))}  
            </select>
        </div>
    )
}