import { FC } from "react"
import { StyledBox, StyledLabel } from "./index.style"
import { CartridgeColor, CartridgeType } from "config"

const CartridgeThumbnail: FC<{ color: CartridgeColor; type: CartridgeType }> = ({
    color,
    type,
}) => {
    const anchor: string = CartridgeType[type]

    return (
        <StyledBox href={`#${anchor}`} highlightColor={color}>
            <StyledLabel color={color}>{anchor}</StyledLabel>
            <br />
            Cartridge
        </StyledBox>
    )
}

export default CartridgeThumbnail
