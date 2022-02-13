import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import {
    StyledVideoBackground,
    StyledBackgroundContainer,
    StyledBackgroundPlaceholder,
    StyledInnerContainer,
    StyledContentBox,
    StyledBackgroundImgWrapper,
    StyledContainer
} from "./index.styles"
import SideSocialMenu from "../SideSocialMenu"
import Image from "next/image"

const DO_NOT_SHOW_VIDEO_BELOW_PX: number = 1024

const VideoBackground: FC<{
    readonly video: string
    readonly opacity: number
}> = ({ video, opacity }) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false)
    const [videoUrl, setVideoUrl] = useState<string>("")
    const router = useRouter()

    useEffect(() => {
        const handleVideoDownload = () => {
            if (videoUrl === "") {
                setTimeout(() => setVideoUrl(video), 100)
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
    }, [videoUrl, router, video])

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
                preload="none"
                poster=""
                opacity={opacity}
            />
        </StyledBackgroundContainer>
    )
}

interface VideoHeaderProps {
    readonly video: {
        readonly src: string
        readonly opacity: number
    }
    readonly img: {
        readonly src: string
        readonly alt: string
    }
    readonly children: JSX.Element
    readonly extraContent?: JSX.Element
}

const VideoHeader: FC<VideoHeaderProps> = ({ video, img, children, extraContent }) => (
    <StyledContainer>
        <StyledInnerContainer>
            <StyledContentBox>{children}</StyledContentBox>
            {extraContent}
            <StyledBackgroundImgWrapper>
                <Image src={img.src} alt={img.alt} sizes={`100vw`} placeholder="blur" />
            </StyledBackgroundImgWrapper>
        </StyledInnerContainer>
        <VideoBackground video={video.src} opacity={video.opacity} />
    </StyledContainer>
)

export default VideoHeader
