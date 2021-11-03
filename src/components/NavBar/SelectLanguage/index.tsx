import { useEffect } from "react"
import { useState } from "react"
import { StyledLanguageIcon, StyledLanguageList, StyledLanguageOption, StyledSelectLanguage } from "./index.styles"

export const SelectLanguage = () => {

    const [language, setLanguage] = useState('PL')

    const handleLanguageChange = (e : any) => {
        setLanguage(e.target.value);
    }
    
    return (
        <StyledSelectLanguage>
            <StyledLanguageIcon src="/assets/icons/globe.svg"/>           
            <StyledLanguageList onChange={handleLanguageChange}>
                <StyledLanguageOption value="PL">PL</StyledLanguageOption>
                <StyledLanguageOption value="EN">EN</StyledLanguageOption>
            </StyledLanguageList>
        </StyledSelectLanguage>
    )
}
