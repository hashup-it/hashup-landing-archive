import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import {
    StyledVideoBackground,
    StyledBackgroundContainer,
    StyledBackgroundImgWrapper,
} from "./index.styles"
import Image from "next/image"

const DO_NOT_SHOW_VIDEO_BELOW_PX: number = 1024

interface VideoBackgroundProps {
    readonly src: string
    readonly opacity: number
}

const VideoBackground: FC<VideoBackgroundProps> = ({ src, opacity }) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false)
    const [videoUrl, setVideoUrl] = useState<string>("")
    const router = useRouter()

    useEffect(() => {
        const handleVideoDownload = () => {
            if (videoUrl === "") {
                setTimeout(() => setVideoUrl(src), 100)
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
    }, [videoUrl, router, src])

    // TODO: Add background img instead
    return (
        <StyledBackgroundContainer>
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
                isLoaded={isVideoLoaded}
            />
        </StyledBackgroundContainer>
    )
}

export default VideoBackground
