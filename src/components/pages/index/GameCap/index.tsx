import { StyledColoredText } from "components/shared/utils.styles"
import { StyledButton1 } from "components/shared/buttons.styles"
import SectionType1 from "components/pages/index/SectionType1"
import { StyledImagesBox, StyledImgWrapper } from "./index.styles"
import { StyledMainImageWrapper } from "components/pages/index/SectionType1/index.styles"
import { Trans, useTranslation } from "react-i18next"
import Image from "next/image"

import bgImg from "/public/assets/game-cap/lying-website.png"
import redDotsImg1 from "/public/assets/game-cap/red-dots.png"
import mainImg from "/public/assets/game-cap/website-preview.png"
import { DeviceWidth } from "__styles__/consts"

const ImagesBox = () => (
    <StyledImagesBox>
        <StyledMainImageWrapper>
            <Image
                src={mainImg}
                alt="GameCap website preview"
                layout="responsive"
                sizes={`(max-width: ${DeviceWidth.mobileL}) 350px, auto`}
                quality={90}
                placeholder="blur"
                priority
            />
        </StyledMainImageWrapper>
        <StyledImgWrapper className="red-dots-1">
            <Image src={redDotsImg1} alt="" quality={5} />
        </StyledImgWrapper>
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
            bgImgSrc={bgImg}
            bgImgAlt="GameCap.io website preview"
            imagesBox={<ImagesBox />}
        />
    )
}

export default GameCap
