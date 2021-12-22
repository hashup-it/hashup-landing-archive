import { useEffect, useState } from "react"
import { HeaderText } from "./HeaderText"
import {
    StyledInnerContainer,
    StyledVideoBackground,
    StyledContentBox,
    StyledBackgroundContainer,
    StyledBackgroundPlaceholderImg,
    StyledBackgroundFlare,
} from "./index.styles"
import HeaderBottomNav from "./HeaderBottomNav"
import { assetsUrl } from "config"

const VideoBackground = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false)
    const [videoUrl, setVideoUrl] = useState<string>("")

    useEffect(() => {
        // Set video url after component render to force lazy loading
        setVideoUrl(assetsUrl("video/spinning-cartridge.webm"))
    }, [])

    return (
        <StyledBackgroundContainer>
            <StyledBackgroundPlaceholderImg isVisible={!isVideoLoaded} />
            <StyledVideoBackground
                autoPlay
                muted
                loop
                playsInline
                src={videoUrl}
                onLoadedData={() => setIsVideoLoaded(true)}
                isLoaded={isVideoLoaded}
                preload="none"
                poster=""
            />
        </StyledBackgroundContainer>
    )
}

const LandingHeader = () => (
    <>
        <StyledInnerContainer>
            <StyledBackgroundFlare />
            <StyledContentBox>
                <HeaderText />
            </StyledContentBox>
            <HeaderBottomNav />
        </StyledInnerContainer>
        <VideoBackground />
    </>
)

export default LandingHeader
