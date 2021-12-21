import { CartridgeColor, CartridgeType } from "config"

export interface CartridgeInterface {
    readonly type: CartridgeType
    readonly color: CartridgeColor
    readonly numberOfBullets: number
    readonly model3d: JSX.Element
}
