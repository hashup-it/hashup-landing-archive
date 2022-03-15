import { FC } from "react"
import { StyledColoredText } from "components/shared/utils.styles"
import {
    StyledCartridgeBox,
    StyledImageBox,
    StyledBulletList,
    StyledDescriptionBox,
    StyledForInfo,
} from "./index.style"
import { useTranslation } from "react-i18next"
import { assetsUrl, CartridgeColor, CartridgeType } from "config"
import { CartridgeInterface } from "../../interfaces"
import { capitalizeFirstLetter } from "util/string"
import Image from "next/image"

interface DescriptionBoxProps {
    readonly leftBasedLayout: boolean
    readonly color: CartridgeColor
    readonly colorText: string
    readonly numberOfBullets: number
}

const DescriptionBox: FC<DescriptionBoxProps> = ({
    leftBasedLayout,
    color,
    colorText,
    numberOfBullets,
}) => {
    const { t } = useTranslation()

    return (
        <StyledDescriptionBox leftBasedLayout={leftBasedLayout}>
            <h2>
                <StyledColoredText color={color}>
                    {capitalizeFirstLetter(colorText)}
                </StyledColoredText>{" "}
                Cartridge
            </h2>
            <div className="label">{t(`cartridges.${colorText}.description`)}</div>
            <StyledForInfo>
                <div className="label">{t("cartridges.cartridge-for")}</div>
                <div className="content">{t(`cartridges.${colorText}.target`)}</div>
            </StyledForInfo>
            <StyledBulletList markerSrc={assetsUrl(`icons/check-${colorText}.svg`)}>
                {Array.from(Array(numberOfBullets).keys()).map((_, index) => (
                    <li key={index}>{t(`cartridges.${colorText}.bullet-${index + 1}`)}</li>
                ))}
            </StyledBulletList>
        </StyledDescriptionBox>
    )
}

interface ImageBoxProps {
    readonly img: string
    readonly colorText: string
    readonly color: CartridgeColor
}

const ImageBox: FC<ImageBoxProps> = ({ img, colorText, color }) => (
    <StyledImageBox color={color}>
        <div className="img-wrapper">
            <Image
                src={img}
                loading="lazy"
                placeholder="blur"
                alt={`${colorText} cartridge`}
                quality={40}
                sizes={"95vw"}
                lazyBoundary="400px"
            />
        </div>
        <div className="flare" />
    </StyledImageBox>
)

interface CartridgeBoxProps extends CartridgeInterface {
    readonly leftBasedLayout: boolean
}

const CartridgeBox: FC<CartridgeBoxProps> = ({
    leftBasedLayout,
    type,
    color,
    numberOfBullets,
    img,
}) => {
    const colorText: string = CartridgeType[type]

    return (
        <StyledCartridgeBox leftBasedLayout={leftBasedLayout}>
            <div className="anchor" id={colorText} />
            <div className="description-box">
                <DescriptionBox
                    color={color}
                    colorText={colorText}
                    leftBasedLayout={leftBasedLayout}
                    numberOfBullets={numberOfBullets}
                />
            </div>
            <div className="image-box">
                <ImageBox img={img} colorText={colorText} color={color} />
            </div>
        </StyledCartridgeBox>
    )
}

export default CartridgeBox
