import { CartridgeThumbnailContainer } from "./index.style"
import { CartridgeThumbnailColoredText } from "../index.styles"
import { CartridgeColor } from "../index"

export const CartridgeThumbnail = ({
    cartridgeType,
    cartridgeColor,
    cartridgeLink,
}: {
    cartridgeType: string
    cartridgeColor: CartridgeColor
    cartridgeLink: string
}) => (
    <CartridgeThumbnailContainer href={cartridgeLink} highlightColor={cartridgeColor}>
        <CartridgeThumbnailColoredText color={cartridgeColor}>
            {cartridgeType}
        </CartridgeThumbnailColoredText>
        <br />
        Cartridge
    </CartridgeThumbnailContainer>
)
