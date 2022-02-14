import { FC } from "react"
import { StyledBackgroundImgWrapper } from "./index.styles"
import Image from "next/image"

interface ImgBackgroundProps {
    readonly src: string
    readonly alt: string
}

const ImgBackground: FC<ImgBackgroundProps> = ({ src, alt }) => (
    <StyledBackgroundImgWrapper>
        <Image src={src} alt={alt} sizes={`100vw`} placeholder="blur" />
    </StyledBackgroundImgWrapper>
)

export default ImgBackground
