import { CartridgeInterface } from "./interfaces"
import { CartridgeColor, CartridgeType } from "config"

export const cartridgesData: CartridgeInterface[] = [
    {
        type: CartridgeType.green,
        color: CartridgeColor.green,
        numberOfBullets: 4,
        img: require("/public/assets/2d-cartridges/with-extras/green.png"),
    },
    {
        type: CartridgeType.gold,
        color: CartridgeColor.gold,
        numberOfBullets: 4,
        img: require("/public/assets/2d-cartridges/with-extras/gold.png"),
    },
    {
        type: CartridgeType.blue,
        color: CartridgeColor.blue,
        numberOfBullets: 4,
        img: require("/public/assets/2d-cartridges/with-extras/blue.png"),
    },
    {
        type: CartridgeType.gray,
        color: CartridgeColor.gray,
        numberOfBullets: 4,
        img: require("/public/assets/2d-cartridges/with-extras/gray.png"),
    },
    {
        type: CartridgeType.red,
        color: CartridgeColor.red,
        numberOfBullets: 4,
        img: require("/public/assets/2d-cartridges/with-extras/red.png"),
    },
]
