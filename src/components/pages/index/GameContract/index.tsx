import { StyledColoredText } from "components/shared/utils.styles"
import { assetsUrl } from "config"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "components/shared/section.styles"
import { StyledButton1 } from "components/shared/buttons.styles"
import Link from "next/link"
import {
    StyledBackgroundFlare,
    StyledAnchor,
    StyledButtonBox,
    StyledImagesBox,
} from "./index.styles"
import { useTranslation } from "react-i18next"

const ImagesBox = () => (
    <StyledImagesBox>
        <img
            className="laptop"
            src={assetsUrl("game-contract/laptop.png")}
            alt="GameContract website preview"
        />
        <img
            className="floating-website"
            src={assetsUrl("game-contract/floating-website.png")}
            alt="GameContract floating website preview"
        />
        <img className="red-dots-1" src={assetsUrl("game-contract/red-dots-1.png")} alt="" />
        <img className="red-dots-2" src={assetsUrl("game-contract/red-dots-2.png")} alt="" />
        <div className="flare" />
    </StyledImagesBox>
)

const Button = () => {
    const { t } = useTranslation()

    return (
        <Link href="game-contract" passHref>
            <a>
                <StyledButton1>
                    {t("game-contract.button")} <StyledColoredText>GameContract</StyledColoredText>
                </StyledButton1>
            </a>
        </Link>
    )
}

const Cartridges = () => {
    const { t } = useTranslation()

    return (
        <StyledSectionWrapper>
            <StyledAnchor id="game-contract" />
            <StyledBackgroundFlare />
            <StyledSectionLabel>
                Game<StyledColoredText>Contract</StyledColoredText>.io
            </StyledSectionLabel>
            <StyledSectionTitle>
                {t("game-contract.title")}
                <StyledColoredText>!</StyledColoredText>
            </StyledSectionTitle>
            <StyledSectionParagraph>{t("game-contract.paragraph")}</StyledSectionParagraph>
            <StyledButtonBox>
                {/* <Button /> */}
            </StyledButtonBox>
            <ImagesBox />
        </StyledSectionWrapper>
    )
}

export default Cartridges
