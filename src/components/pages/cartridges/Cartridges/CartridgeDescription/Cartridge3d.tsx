import { CameraDistance } from "components/pages/cartridges/CartridgeScene"
import { CartridgeType } from "config"
import dynamic from "next/dynamic"
import { FC } from "react"

const Cartridge3d: FC<{ readonly type: CartridgeType }> = ({ type }) => {
    let Dynamic3dModel: any

    switch (type) {
        case CartridgeType.green:
            Dynamic3dModel = dynamic(
                () => import("components/pages/cartridges/CartridgeScene/Three/ModelGreen"),
                { ssr: false }
            )
            break
        case CartridgeType.red:
            Dynamic3dModel = dynamic(
                () => import("components/pages/cartridges/CartridgeScene/Three/ModelRed"),
                { ssr: false }
            )

            break
        case CartridgeType.gold:
            Dynamic3dModel = dynamic(
                () => import("components/pages/cartridges/CartridgeScene/Three/ModelGold"),
                { ssr: false }
            )

            break
        case CartridgeType.blue:
            Dynamic3dModel = dynamic(
                () => import("components/pages/cartridges/CartridgeScene/Three/ModelBlue"),
                { ssr: false }
            )
            break
        default:
            Dynamic3dModel = dynamic(
                () => import("components/pages/cartridges/CartridgeScene/Three/ModelGray"),
                { ssr: false }
            )
    }

    const DynamicScene = dynamic(() => import("components/pages/cartridges/CartridgeScene"), {
        ssr: false,
    })

    return (
        <DynamicScene
            cameraDistance={CameraDistance.cartridgesListing}
            cartridgeModel={<Dynamic3dModel />}
        />
    )
}

export default Cartridge3d
