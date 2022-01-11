import SectionType1 from "components/pages/index/SectionType1"
import { StyledColoredText } from "components/shared/utils.styles"
import { StyledButton1 } from "components/shared/buttons.styles"
import { StyledImagesBox, StyledImgWrapper } from "./index.styles"
import { StyledMainImageWrapper } from "components/pages/index/SectionType1/index.styles"
import { Trans, useTranslation } from "react-i18next"
import Image from "next/image"
import { DeviceWidth } from "__styles__/consts"

import bgImg from "/public/assets/game-xplorer/lying-website.png"
import mainImg from "/public/assets/game-xplorer/website-preview.png"
import redDotsImg1 from "/public/assets/game-xplorer/red-dots-1.png"
import redDotsImg2 from "/public/assets/game-xplorer/red-dots-2.png"

const ImagesBox = () => (
    <StyledImagesBox>
        <StyledMainImageWrapper>
            <Image
                src={mainImg}
                alt="GameXplorer website preview"
                layout="responsive"
                sizes={`(max-width: ${DeviceWidth.mobileL}) 350px, auto`}
                quality={75}
                loading="lazy"
                placeholder="blur"
                lazyBoundary="400px"
            />
        </StyledMainImageWrapper>
        <StyledImgWrapper className="red-dots-1">
            <Image src={redDotsImg1} alt="" quality={15} lazyBoundary="300px" />
        </StyledImgWrapper>
        <StyledImgWrapper className="red-dots-2">
            <Image src={redDotsImg2} alt="" quality={15} lazyBoundary="300px" />
        </StyledImgWrapper>
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
            bgImgSrc={bgImg}
            bgImgAlt="GameXplorer.io website preview"
            imagesBox={<ImagesBox />}
        />
    )
}

export default GameXplorer
