import { useEffect, useState } from "react"
import { HeaderText } from "./HeaderText"
import {
    StyledContainer,
    StyledVideoBackground,
    StyledContentBox,
    StyledBackgroundPlaceholderImg,
} from "./index.styles"
import HeaderBottomNav from "./HeaderBottomNav"
import { assetsUrl } from "config"

const VideoBackground = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false)
    const [videoUrl, setVideoUrl] = useState<string>("")

    useEffect(() => {
        // Set video url after component render to force lazy loading
        setVideoUrl(assetsUrl("video/spinning-cartridge.mp4"))
    }, [])

    return (
        <>
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
        </>
    )
}

const LandingHeader = () => (
    <StyledContainer>
        <StyledContentBox>
            <HeaderText />
        </StyledContentBox>
        <HeaderBottomNav />
        <VideoBackground />
    </StyledContainer>
)

export default LandingHeader
