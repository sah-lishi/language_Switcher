import { LanguageSelector } from "./LanguageSelector"
import { LanguageProvider } from "./LanguageProvider"
import { Translator } from "./Translator"

function App() {

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-400 text-black flex items-center justify-center">
        {/* card */}
        <div className="w-full max-w-md bg-white rounded-xl flex flex-col p-6 gap-6">
          <h1 className="text-2xl font-semibold text-center">Language Translator</h1>
          <LanguageSelector/>
          <Translator/>
        </div>  
      </div>
    </LanguageProvider>
  )
}

export default App
