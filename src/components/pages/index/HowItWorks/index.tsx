import { StyledItem, StyledCarouselWrapper, StyledControlButton } from "./index.styles"
import { Trans } from "react-i18next"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import Image from "next/image"
import { FC, useEffect, useState } from "react"
import { useWindowWidth } from "@react-hook/window-size/throttled"
import { DeviceWidth, GLOBAL_CONTENT_WIDTH_PX } from "__styles__/consts"

import infographic1Desktop from "/public/assets/home/how-it-works/infographic-1-desktop.png"
import infographic1Mobile from "/public/assets/home/how-it-works/infographic-1-mobile.png"
import infographic2Desktop from "/public/assets/home/how-it-works/infographic-2-desktop.png"
import infographic2Mobile from "/public/assets/home/how-it-works/infographic-2-mobile.png"
import SectionType2 from "components/shared/SectionType2"

const MOBILE_IMG_BELOW_PX: number = 450

const CarouselItem: FC<{ desktopImg: string; mobileImg: string; alt: string }> = ({
    desktopImg,
    mobileImg,
    alt,
}) => {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const width = useWindowWidth({ fps: 5 })

    useEffect(() => {
        if (width < MOBILE_IMG_BELOW_PX) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [width])

    return (
        <StyledItem>
            {isMobile ? (
                <div className="mobile-img">
                    <Image
                        src={mobileImg}
                        alt={alt}
                        layout="responsive"
                        quality={95}
                        lazyBoundary="400px"
                        sizes="130vw" // Keep it bigger to be super sharp
                    />
                </div>
            ) : (
                <div className="desktop-img">
                    <Image
                        src={desktopImg}
                        alt={alt}
                        quality={75}
                        layout="responsive"
                        placeholder="blur"
                        sizes={`(min-width: ${DeviceWidth.laptopL}) ${GLOBAL_CONTENT_WIDTH_PX}px, 100vw`}
                        lazyBoundary="400px"
                    />
                </div>
            )}
        </StyledItem>
    )
}

const carouselItems = [
    <CarouselItem
        key={0}
        desktopImg={infographic1Desktop}
        mobileImg={infographic1Mobile}
        alt="Comparision of distribution systems"
    />,
    <CarouselItem
        key={1}
        desktopImg={infographic2Desktop}
        mobileImg={infographic2Mobile}
        alt="Game license on blockchain"
    />,
]

const HowItWorks = () => (
    <SectionType2
        title={<Trans i18nKey="home.how-it-works.title" />}
        label={<Trans i18nKey="home.how-it-works.label" />}
        paragraph={<Trans i18nKey="home.how-it-works.paragraph" />}
    >
        <StyledCarouselWrapper>
            <AliceCarousel
                items={carouselItems}
                controlsStrategy="alternate"
                renderNextButton={({ isDisabled }) => (
                    <StyledControlButton isDisabled={isDisabled} />
                )}
                renderPrevButton={({ isDisabled }) => (
                    <StyledControlButton isDisabled={isDisabled} isPrev />
                )}
                disableDotsControls
                mouseTracking
            />
        </StyledCarouselWrapper>
    </SectionType2>
)

export default HowItWorks
