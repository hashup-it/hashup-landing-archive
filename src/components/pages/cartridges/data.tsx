import { CartridgeInterface } from "./interfaces"
import { CartridgeColor, CartridgeType } from "config"

import ModelRed from "components/pages/cartridges/CartridgeScene/Three/ModelRed"
import ModelBlue from "components/pages/cartridges/CartridgeScene/Three/ModelBlue"
import ModelGray from "components/pages/cartridges/CartridgeScene/Three/ModelGray"
import ModelGreen from "components/pages/cartridges/CartridgeScene/Three/ModelGreen"
import ModelGold from "components/pages/cartridges/CartridgeScene/Three/ModelGold"

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
