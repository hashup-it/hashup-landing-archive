import { langsOfWhitepaper, documentsUrl, Languages } from "config"

export const getWhitepaper = (lang: string): string => {
    if (!langsOfWhitepaper.includes(lang)) {
        lang = Languages.en
    }
    return documentsUrl(`whitepapers/whitepaper-${lang}.pdf`)
}
