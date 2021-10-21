const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
}

const minWidth = (width: string): string => `@media(min-width: ${width})`

export const mediaQuery = {
    mobileS: minWidth(size.mobileS),
    mobileM: minWidth(size.mobileM),
    mobileL: minWidth(size.mobileL),
    tablet: minWidth(size.tablet),
    laptop: minWidth(size.laptop),
    laptopL: minWidth(size.laptopL),
    desktop: minWidth(size.desktop),
    desktopL: minWidth(size.desktop),
}
