import { useEffect, useState } from "react"
import { HeaderText } from "./HeaderText"
import {
    StyledInnerContainer,
    StyledVideoBackground,
    StyledContentBox,
    StyledBackgroundContainer,
    StyledBackgroundPlaceholder,
    StyledBackgroundImgWrapper,
    StyledBottomGradient,
} from "./index.styles"
import HeaderBottomNav from "./HeaderBottomNav"
import Image from "next/image"

import bgImg from "/public/assets/header/cartridge.png"
import { assetsUrl } from "config"
import LazyLoad from "react-lazyload"

const DO_NOT_SHOW_VIDEO_BELOW_PX: number = 1024

const VideoBackground = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false)
    const [videoUrl, setVideoUrl] = useState<string>("")

    useEffect(() => {
        // Do not download video on mobile device
        if (window.innerWidth >= DO_NOT_SHOW_VIDEO_BELOW_PX) {
            // Set video url after component render to force lazy loading
            setTimeout(() => setVideoUrl(assetsUrl("video/spinning-cartridge.webm")), 100)
        }
    }, [])

    return (
        <StyledBackgroundContainer>
            <StyledBackgroundPlaceholder isVisible={!isVideoLoaded} />
            <LazyLoad once>
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
            </LazyLoad>
        </StyledBackgroundContainer>
    )
}

const LandingHeader = () => (
    <>
        <StyledInnerContainer>
            <StyledContentBox>
                <HeaderText />
            </StyledContentBox>
            <HeaderBottomNav />
            <StyledBackgroundImgWrapper>
                <Image
                    src={bgImg}
                    alt="HashUp.it cartridge"
                    // For desktop download the smallest one
                    sizes={`100vw`}
                    placeholder="blur"
                />
            </StyledBackgroundImgWrapper>
        </StyledInnerContainer>
        <VideoBackground />
        <StyledBottomGradient />
    </>
)

export default LandingHeader
