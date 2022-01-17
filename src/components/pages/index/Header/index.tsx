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
import SideSocialMenu from "components/global/SideSocialMenu"

import bgImg from "/public/assets/header/cartridge.png"
import { assetsUrl } from "config"
import { useRouter } from "next/router"

const DO_NOT_SHOW_VIDEO_BELOW_PX: number = 1024

const VideoBackground = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false)
    const [videoUrl, setVideoUrl] = useState<string>("")
    const router = useRouter()

    useEffect(() => {
        const handleVideoDownload = () => {
            if (videoUrl === "") {
                setTimeout(() => setVideoUrl(assetsUrl("video/spinning-cartridge.webm")), 100)
            }
        }

        // Do not download video on mobile device
        if (window.innerWidth >= DO_NOT_SHOW_VIDEO_BELOW_PX) {
            // Set video url after component render to force lazy loading
            // This trick (using both window and router event) is necessary because
            // window is fired on initial load, router is fired on further navigation reload
            window.addEventListener("load", handleVideoDownload)
            router.events.on("routeChangeComplete", handleVideoDownload)
        }

        return () => {
            window.removeEventListener("load", handleVideoDownload)
            router.events.off("routeChangeComplete", handleVideoDownload)
        }
    }, [videoUrl, router])

    return (
        <StyledBackgroundContainer>
            <SideSocialMenu />
            <StyledBackgroundPlaceholder isVisible={!isVideoLoaded} />
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
            <StyledContentBox>
                <HeaderText />
            </StyledContentBox>
            <HeaderBottomNav />
            <StyledBackgroundImgWrapper>
                <Image src={bgImg} alt="HashUp.it cartridge" sizes={`100vw`} placeholder="blur" />
            </StyledBackgroundImgWrapper>
        </StyledInnerContainer>
        <VideoBackground />
        <StyledBottomGradient />
    </>
)

export default LandingHeader
