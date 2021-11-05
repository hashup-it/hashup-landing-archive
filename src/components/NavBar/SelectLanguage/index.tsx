import { useState } from "react"
import {
    StyledLanguageIcon,
    StyledLanguageList,
    StyledLanguageOption,
    StyledSelectLanguage,
    StyledLanguage,
} from "./index.styles"
import i18n from "i18n"

export const SelectLanguage = () => {
    const handleLanguageChange = (e: any) => {
        i18n.changeLanguage(e.target.value)
        setLanguage(e.target.value)
        setIsClicked(!isClicked)
    }

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const [language, setLanguage] = useState("pl")
    const [isClicked, setIsClicked] = useState(false)

    return (
        <>
            {isClicked ? (
                <StyledSelectLanguage>
                    <StyledLanguageIcon src="/assets/icons/globe.svg" />
                    <StyledLanguage onClick={handleClick}>
                        {language}
                        <StyledLanguageIcon src="/assets/icons/chevron-down.svg" />
                    </StyledLanguage>
                    <StyledLanguageList>
                        <StyledLanguageOption value="pl" onClick={handleLanguageChange}>
                            PL
                        </StyledLanguageOption>
                        <StyledLanguageOption value="en" onClick={handleLanguageChange}>
                            EN
                        </StyledLanguageOption>
                    </StyledLanguageList>
                </StyledSelectLanguage>
            ) : (
                <StyledSelectLanguage>
                    <StyledLanguageIcon src="/assets/icons/globe.svg" />
                    <StyledLanguage onClick={handleClick}>
                        {language}
                        <StyledLanguageIcon src="/assets/icons/chevron-down.svg" />
                    </StyledLanguage>
                </StyledSelectLanguage>
            )}
        </>
    )
}
