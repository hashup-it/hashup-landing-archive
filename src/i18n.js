import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Cache from "i18next-localstorage-cache"
import LanguageDetector from "i18next-browser-languagedetector"
import { Languages } from "config"

const resources = {
    [Languages.en.code]: { translation: Languages.en.locale },
    // [Languages.pl.code]: { translation: Languages.pl.locale },
    // [Languages.de.code]: { translation: Languages.de.locale },
}

i18n.use(initReactI18next)
    .use(Cache)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: Languages.en.code,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        cache: {
            enabled: true,
        },
    })

export default i18n
