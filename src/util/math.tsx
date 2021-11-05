export const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const hexToRGB = (hex: string, alpha: number = 1): string => {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16)

    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")"
}
