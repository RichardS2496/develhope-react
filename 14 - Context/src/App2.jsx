import { useState } from "react";
import "./App.css";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [lang, setLang] = useState("es");

  function changeLang(e) {
    setLang(e.target.value);
  }
  return (
    <LanguageContext.Provider value={lang}>
      <select onChange={changeLang} name="" id="">
        <option value={"es"}>{lang === "es" ? "Español" : "Spanish"}</option>
        <option value={"en"}>{lang === "es" ? "Inglés" : "English"}</option>
      </select>
      <Clock />
    </LanguageContext.Provider>
  );
}

export default App;
