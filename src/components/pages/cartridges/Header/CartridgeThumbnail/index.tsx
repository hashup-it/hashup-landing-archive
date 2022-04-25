import { FC } from "react"
import { StyledBox } from "./index.style"
import { CartridgeColor, CartridgeType } from "config"

const CartridgeThumbnail: FC<{ color: CartridgeColor; type: CartridgeType }> = ({
    color,
    type,
}) => {
    const anchor: string = CartridgeType[type]

    return (
        <StyledBox href={`#${anchor}`} color={color}>
            <div className="label">{anchor}</div>
            <div className="text">Cartridge</div>
        </StyledBox>
    )
}

export default CartridgeThumbnail
