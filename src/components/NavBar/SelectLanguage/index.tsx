import { useState } from "react"
import {
    StyledLanguageIcon,
    StyledLanguageList,
    StyledLanguageOption,
    StyledSelectLanguage,
    StyledLanguage,
} from "./index.styles"
import i18n from "i18n"

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
            <StyledLanguageIcon src="/assets/icons/globe.svg" />
            <StyledLanguage onClick={handleClick}>
                {language}
                <StyledLanguageIcon src="/assets/icons/chevron-down.svg" />
            </StyledLanguage>
            {isClicked && (
                <StyledLanguageList>
                    {Languages.map((lng, id) => (
                        <StyledLanguageOption value={lng} key={id} onClick={handleLanguageChange}>
                            {lng}
                        </StyledLanguageOption>
                    ))}
                </StyledLanguageList>
            )}
        </StyledSelectLanguage>
    )
}
