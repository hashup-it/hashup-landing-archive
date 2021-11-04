import {
    StyledLanguageIcon,
    StyledLanguageList,
    StyledLanguageOption,
    StyledSelectLanguage,
} from "./index.styles"
import i18n from "i18n"

export const SelectLanguage = () => {
    const handleLanguageChange = (e: any) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <StyledSelectLanguage>
            <StyledLanguageIcon src="/assets/icons/globe.svg" />
            <StyledLanguageList onChange={handleLanguageChange}>
                <StyledLanguageOption value="pl">PL</StyledLanguageOption>
                <StyledLanguageOption value="en">EN</StyledLanguageOption>
            </StyledLanguageList>
            <StyledLanguageIcon src="/assets/icons/chevron-down.svg" />
        </StyledSelectLanguage>
    )
}
