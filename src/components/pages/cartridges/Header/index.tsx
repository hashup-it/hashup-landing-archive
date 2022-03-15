import { StyledColoredText } from "components/shared/utils.styles"
import { useTranslation } from "react-i18next"
import { cartridgesData } from "../data"
import CartridgeThumbnail from "./CartridgeThumbnail"
import SideSocialMenu from "components/shared/Header/SideSocialMenu"
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
            <div className="inner-container">
                <StyledBackgroundFlare />
                <StyledTitle>
                    {t("cartridges.header")}
                    <StyledColoredText>.</StyledColoredText>
                </StyledTitle>
                <StyledParagraph>{t("cartridges.header-paragraph")}</StyledParagraph>
                <Thumbnails />
                <SideSocialMenu />
            </div>
        </StyledContainer>
    )
}

export default Header
