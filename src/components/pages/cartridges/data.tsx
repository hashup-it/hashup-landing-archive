import { CartridgeInterface } from "./interfaces"
import { CartridgeColor, CartridgeType } from "config"

export const cartridgesData: CartridgeInterface[] = [
    {
        type: CartridgeType.green,
        color: CartridgeColor.green,
        numberOfBullets: 4,
    },
    {
        type: CartridgeType.gold,
        color: CartridgeColor.gold,
        numberOfBullets: 4,
    },
    {
        type: CartridgeType.blue,
        color: CartridgeColor.blue,
        numberOfBullets: 4,
    },
    {
        type: CartridgeType.gray,
        color: CartridgeColor.gray,
        numberOfBullets: 4,
    },
    {
        type: CartridgeType.red,
        color: CartridgeColor.red,
        numberOfBullets: 4,
    },
]
