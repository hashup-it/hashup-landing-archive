import { StyledColoredText } from "components/shared/utils.styles"
import { assetsUrl } from "config"
import { StyledButton1 } from "components/shared/buttons.styles"
import SectionType1 from "components/pages/index/SectionType1"
import { StyledImagesBox } from "./index.styles"
import { StyledMainImage } from "components/pages/index/SectionType1/index.styles"
import { Trans, useTranslation } from "react-i18next"

const ImagesBox = () => (
    <StyledImagesBox>
        <StyledMainImage
            className="main"
            src={assetsUrl("game-cap/website-preview.png")}
            alt="GameCap website preview"
        />
        <img className="red-dots-1" src={assetsUrl("game-cap/red-dots.png")} alt="" />
        <div className="flare" />
    </StyledImagesBox>
)

const Button = () => {
    const { t } = useTranslation()

    return (
        <StyledButton1>
            {t("game-cap.button")} <StyledColoredText>GameCap</StyledColoredText>
        </StyledButton1>
    )
}

const GameCap = () => {
    const { t } = useTranslation()

    return (
        <SectionType1
            anchor="game-cap"
            label={
                <>
                    Game<StyledColoredText>Cap</StyledColoredText>.io
                </>
            }
            title={
                <>
                    {t("game-cap.title")}
                    <StyledColoredText>.</StyledColoredText>
                </>
            }
            paragraph={<Trans i18nKey={"game-cap.paragraph"} />}
            button={<></>}
            bgImgSrc={assetsUrl("game-cap/lying-website.png")}
            imagesBox={<ImagesBox />}
        />
    )
}

export default GameCap
