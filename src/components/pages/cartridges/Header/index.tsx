import { StyledSectionParagraph } from "components/shared/section.styles"
import { StyledColoredText } from "components/shared/utils.styles"
import { useTranslation } from "react-i18next"
import { cartridgesData } from "../data"
import CartridgeThumbnail from "./CartridgeThumbnail"
import {
    StyledTitle,
    StyledContainer,
    StyledBackgroundFlare,
    StyledParagraph,
    StyledThumbnailsBox,
} from "./index.styles"

const Thumbnails = () => (
    <StyledThumbnailsBox>
        {cartridgesData.map((item, index) => (
            <CartridgeThumbnail key={index} color={item.color} type={item.type} />
        ))}
    </StyledThumbnailsBox>
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
            <StyledParagraph>{t("cartridges-tab.header-paragraph")}</StyledParagraph>
            <Thumbnails />
        </StyledContainer>
    )
}

export default Header
