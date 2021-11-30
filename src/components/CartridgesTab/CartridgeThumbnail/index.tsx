import { FC } from "react"
import { CartridgeThumbnailContainer } from "./index.style"
import { CartridgeThumbnailColoredText } from "../index.styles"
import { CartridgeThumbnailInterface, CartridgeTypeEnum } from "../index"

const CartridgeThumbnail: FC<CartridgeThumbnailInterface> = ({ type, color }) => {
    const anchor: string = CartridgeTypeEnum[type]

    return (
        <CartridgeThumbnailContainer href={`#${anchor}`} highlightColor={color}>
            <CartridgeThumbnailColoredText color={color}>{anchor}</CartridgeThumbnailColoredText>
            <br />
            Cartridge
        </CartridgeThumbnailContainer>
    )
}

export default CartridgeThumbnail
