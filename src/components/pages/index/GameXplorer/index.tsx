import SectionType1 from "components/pages/index/SectionType1"
import { StyledColoredText } from "components/shared/utils.styles"
import { assetsUrl } from "config"
import { StyledButton1 } from "components/shared/buttons.styles"
import { StyledImagesBox } from "./index.styles"
import { StyledMainImage } from "components/pages/index/SectionType1/index.styles"
import { Trans, useTranslation } from "react-i18next"

const ImagesBox = () => (
    <StyledImagesBox>
        <StyledMainImage
            className="main"
            src={assetsUrl("game-xplorer/website-preview.png")}
            alt="GameXplorer website preview"
        />
        <img className="red-dots-1" src={assetsUrl("game-xplorer/red-dots-1.png")} alt="" />
        <img className="red-dots-2" src={assetsUrl("game-xplorer/red-dots-2.png")} alt="" />
    </StyledImagesBox>
)

const Button = () => {
    const { t } = useTranslation()

    return (
        <StyledButton1>
            {t("game-xplorer.button")} <StyledColoredText>GameXplorer</StyledColoredText>
        </StyledButton1>
    )
}

const GameXplorer = () => {
    const { t } = useTranslation()

    return (
        <SectionType1
            anchor="game-xplorer"
            label={
                <>
                    Game<StyledColoredText>Xplorer</StyledColoredText>.io
                </>
            }
            title={
                <>
                    {t("game-xplorer.title")}
                    <StyledColoredText>!</StyledColoredText>
                </>
            }
            paragraph={<Trans i18nKey={"game-xplorer.paragraph"} components={{ b: <b /> }} />}
            button={<></>}
            bgImgSrc={assetsUrl("game-xplorer/lying-website.png")}
            imagesBox={<ImagesBox />}
        />
    )
}

export default GameXplorer
