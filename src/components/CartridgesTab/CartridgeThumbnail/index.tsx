import { FC } from "react"
import { CartridgeThumbnailContainer } from "./index.style"
import { CartridgeThumbnailColoredText } from "../index.styles"
import { CartridgeColor, CartridgeType } from "config"

const CartridgeThumbnail: FC<{ color: CartridgeColor; type: CartridgeType }> = ({
    color,
    type,
}) => {
    const anchor: string = CartridgeType[type]

    return (
        <CartridgeThumbnailContainer href={`#${anchor}`} highlightColor={color}>
            <CartridgeThumbnailColoredText color={color}>{anchor}</CartridgeThumbnailColoredText>
            <br />
            Cartridge
        </CartridgeThumbnailContainer>
    )
}

export default CartridgeThumbnail
