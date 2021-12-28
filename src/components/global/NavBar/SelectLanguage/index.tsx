import { useState } from "react"
import {
    StyledLanguageIcon,
    StyledLanguageList,
    StyledLanguageOption,
    StyledSelectLanguage,
    StyledSelectedLanguage,
} from "./index.styles"
import i18n from "i18n"
import { assetsUrl, Languages } from "config"


const getLanguage = (): string => {
    const lang: string = i18n.language
    
    // Why is it necessary? Good question. Nobody knows why i18n.language sometimes
    // returns "en-en" instead of pure "en". If so, get first part.
    if (lang.includes("-")) {
        return lang.split("-")[0]
    }

    return lang
}

export const SelectLanguage = () => {
    const [language, setLanguage] = useState<string>(getLanguage())
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const handleLanguageChange = (e: any): void => {
        i18n.changeLanguage(e.target.value)
        setLanguage(e.target.value)
        setIsClicked(!isClicked)
    }

    const handleClick = (): void => {
        // setIsClicked(!isClicked)
    }

    return (
        <StyledSelectLanguage>
            <StyledLanguageIcon src={assetsUrl("icons/globe.svg")} />
            <StyledSelectedLanguage onClick={handleClick}>
                {language}
                <StyledLanguageIcon src={assetsUrl("icons/chevron-down.svg")} />
            </StyledSelectedLanguage>
            {isClicked && (
                <StyledLanguageList>
                    {Object.values(Languages).map((lang, index) => (
                        <StyledLanguageOption
                            value={lang.code}
                            key={index}
                            onClick={handleLanguageChange}
                        >
                            {lang.code}
                        </StyledLanguageOption>
                    ))}
                </StyledLanguageList>
            )}
        </StyledSelectLanguage>
    )
}
