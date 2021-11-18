import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Cache from "i18next-localstorage-cache"
import LanguageDetector from "i18next-browser-languagedetector"
import { LanguagesEnum } from "config"

const translationEN = require("./locales/en/translation.json")
const translationPL = require("./locales/pl/translation.json")
const translationDE = require("./locales/de/translation.json")

const resources = {
    [LanguagesEnum.en]: { translation: translationEN },
    [LanguagesEnum.pl]: { translation: translationPL },
    [LanguagesEnum.de]: { translation: translationDE },
}

i18n.use(initReactI18next)
    .use(Cache)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: LanguagesEnum.en,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        cache: {
            enabled: true,
        },
    })

export default i18n
