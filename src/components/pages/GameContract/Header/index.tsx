import { GenericHeaderText } from "components/shared/Header/GenericHeaderText"
import VideoHeader from "components/shared/Header/FullScreenHeader"
import VideoBackground from "components/shared/Header/VideoBackground"
import ImgBackground from "components/shared/Header/ImgBackground"
import { StyledColoredText } from "components/shared/utils.styles"
import { useTranslation } from "react-i18next"
import { StyledBackground } from "./index.styles"

import bgImg from "/public/assets/header/cartridge.png"

const Header = () => {
    const { t } = useTranslation()

    return (
        <VideoHeader
            desktopBackground={
                <VideoBackground src="https://cdn.hashup.it/landing/Hashup_web.mp4" opacity={0.5} />
            }
            mobileBackground={<ImgBackground src={bgImg} alt="Cartridge" />}
        >
            <GenericHeaderText
                label={
                    <>
                        Game <StyledColoredText>Contract</StyledColoredText>
                    </>
                }
                title={<>Publish your game in 5 steps.</>}
                paragraph={
                    <>
                        HashUp wants to make the process of releasing games as simple as can be.
                        With GameContract were able to take the developers journey to the next
                        level.
                    </>
                }
            />
        </VideoHeader>
    )
}

export default Header
