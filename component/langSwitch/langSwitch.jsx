import { useTranslation } from 'next-i18next';
import i18n from 'i18n';
import React, { useState } from "react";



const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' }
];

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("fr");

//   const currentLanguage = i18n.language;

//   const handleLanguageChange = (selectedLanguage) => {
//     console.log("language changed ",selectedLanguage);
//     i18n.changeLanguage(selectedLanguage);
//   };
const handleLangChange = evt => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    // <select value={currentLanguage} onChange={(e) => handleLanguageChange(e.target.value)}>
    //   {languageOptions.map((option) => (
    //     <option key={option.value} value={option.value}>
    //       {option.label}
    //     </option>
    //   ))}
    // </select>
    <select onChange={handleLangChange} value={language}>
    <option value="fr">FR</option>
    <option value="en">EN</option>
  </select>
  );
}

export default LanguageSelector;