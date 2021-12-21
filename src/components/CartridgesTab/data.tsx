import { CartridgeInterface } from "./interfaces"

import ModelRed from "../../components/CartridgeScene/Three/ModelRed"
import ModelBlue from "../../components/CartridgeScene/Three/ModelBlue"
import ModelGray from "../../components/CartridgeScene/Three/ModelGray"
import ModelGreen from "../../components/CartridgeScene/Three/ModelGreen"
import ModelGold from "../../components/CartridgeScene/Three/ModelGold"
import { CartridgeColor, CartridgeType } from "config"

const ROTATION: number[] = [0, -2, Math.PI / 128]

export const cartridgesData: CartridgeInterface[] = [
    {
        type: CartridgeType.green,
        color: CartridgeColor.green,
        numberOfBullets: 4,
        model3d: <ModelGreen rotation={ROTATION} />,
    },
    {
        type: CartridgeType.gold,
        color: CartridgeColor.gold,
        numberOfBullets: 4,
        model3d: <ModelGold rotation={ROTATION} />,
    },
    {
        type: CartridgeType.blue,
        color: CartridgeColor.blue,
        numberOfBullets: 4,
        model3d: <ModelBlue rotation={ROTATION} />,
    },
    {
        type: CartridgeType.gray,
        color: CartridgeColor.gray,
        numberOfBullets: 4,
        model3d: <ModelGray rotation={ROTATION} />,
    },
    {
        type: CartridgeType.red,
        color: CartridgeColor.red,
        numberOfBullets: 4,
        model3d: <ModelRed rotation={ROTATION} />,
    },
]
