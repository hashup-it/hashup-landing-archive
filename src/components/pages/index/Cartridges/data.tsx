import { CartridgeType } from "config"

import redCartridgeImg from "/public/assets/2d-cartridges/without-extras/red.png"
import blueCartridgeImg from "/public/assets/2d-cartridges/without-extras/blue.png"
import greenCartridgeImg from "/public/assets/2d-cartridges/without-extras/green.png"
import goldCartridgeImg from "/public/assets/2d-cartridges/without-extras/gold.png"
import grayCartridgeImg from "/public/assets/2d-cartridges/without-extras/gray.png"

export const cartridges: { type: CartridgeType; img: string; imgQuality: number; lazyBoundary: number }[] =
    [
        {
            type: CartridgeType.blue,
            img: blueCartridgeImg,
            imgQuality: 1,
            lazyBoundary: 200,
        },
        {
            type: CartridgeType.green,
            img: greenCartridgeImg,
            imgQuality: 1,
            lazyBoundary: 200,
        },
        {
            type: CartridgeType.gray,
            img: grayCartridgeImg,
            imgQuality: 10,
            lazyBoundary: 300,
        },
        {
            type: CartridgeType.red,
            img: redCartridgeImg,
            imgQuality: 10,
            lazyBoundary: 300,
        },
        {
            type: CartridgeType.gold,
            img: goldCartridgeImg,
            imgQuality: 55,
            lazyBoundary: 500,
        },
    ]