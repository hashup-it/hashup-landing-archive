export enum CartridgeType {
    green,
    gold,
    blue,
    gray,
    red,
}

export enum CartridgeColor {
    green = "#6AAD38",
    gold = "#BEA379",
    blue = "#468CF4",
    gray = "#9D9D9D",
    red = "#FF3F3F",
}

export interface CartridgeInterface {
    readonly type: CartridgeType
    readonly color: CartridgeColor
    readonly numberOfBullets: number
    readonly model3d: JSX.Element
}
