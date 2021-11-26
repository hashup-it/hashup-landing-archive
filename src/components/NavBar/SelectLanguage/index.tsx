import { useState } from "react"
import {
    StyledLanguageIcon,
    StyledLanguageList,
    StyledLanguageOption,
    StyledSelectLanguage,
    StyledSelectedLanguage,
} from "./index.styles"
import i18n from "i18n"
import { assetsUrl } from "config"

const Languages: string[] = ["pl", "en", "de"]

export const SelectLanguage = () => {
    const [language, setLanguage] = useState<string>(i18n.language)
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const handleLanguageChange = (e: any): void => {
        i18n.changeLanguage(e.target.value)
        setLanguage(e.target.value)
        setIsClicked(!isClicked)
    }

    const handleClick = (): void => {
        setIsClicked(!isClicked)
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
                    {Languages.map((lng, index) => (
                        <StyledLanguageOption
                            value={lng}
                            key={index}
                            onClick={handleLanguageChange}
                        >
                            {lng}
                        </StyledLanguageOption>
                    ))}
                </StyledLanguageList>
            )}
        </StyledSelectLanguage>
    )
}
