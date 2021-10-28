const OTHERS_FEE_PROCENT: number = 30
const OUR_FEE_PROCENT: number = 0

const calcNewPrice = (oldPrice: number, fee: number): number => {
    return oldPrice * (1 - fee / 100)
}

export const calcOthersProfit = (soldItems: number, price: number): number => {
    return soldItems * calcNewPrice(price, OTHERS_FEE_PROCENT)
}

export const calcOurProfit = (soldItems: number, price: number): number => {
    return soldItems * calcNewPrice(price, OUR_FEE_PROCENT)
}
