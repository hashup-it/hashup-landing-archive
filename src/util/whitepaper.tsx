import { langsOfWhitepaper, documentsUrl, Languages } from "config"

export const getWhitepaper = (langCode: string): string => {
    if (!langsOfWhitepaper.includes(langCode)) {
        // Fallback option
        langCode = Languages.en.code
    }
    return documentsUrl(`whitepapers/whitepaper-${langCode}.pdf`)
}
