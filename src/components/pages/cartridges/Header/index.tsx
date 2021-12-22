import { StyledSectionParagraph } from "components/shared/section.styles"
import { StyledColoredText } from "components/shared/utils.styles"
import { useTranslation } from "react-i18next"
import { cartridgesData } from "../data"
import CartridgeThumbnail from "./CartridgeThumbnail"
import {
    StyledTitle,
    StyledContainer,
    StyledCartridgeThumbnailsBox,
    StyledBackgroundFlare,
} from "./index.styles"

const CartridgeThumbnails = () => (
    <StyledCartridgeThumbnailsBox>
        {cartridgesData.map((item, index) => (
            <CartridgeThumbnail key={index} color={item.color} type={item.type} />
        ))}
    </StyledCartridgeThumbnailsBox>
)

const Header = () => {
    const { t } = useTranslation()

    return (
        <StyledContainer>
            <StyledBackgroundFlare />
            <StyledTitle>
                {t("cartridges-tab.header")}
                <StyledColoredText>.</StyledColoredText>
            </StyledTitle>
            <StyledSectionParagraph>
                {t("cartridges-tab.header-small-1")}
                <br />
                {t("cartridges-tab.header-small-2")}
            </StyledSectionParagraph>
            <CartridgeThumbnails />
        </StyledContainer>
    )
}

export default Header
