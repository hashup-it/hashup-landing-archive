const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopM: "1320px",
    laptopL: "1440px",
    desktop: "1920px",
    desktopL: "2560px",
}

const maxWidth = (width: string): string => `@media(max-width: ${width})`

export const mediaQuery = {
    mobileS: maxWidth(size.mobileS),
    mobileM: maxWidth(size.mobileM),
    mobileL: maxWidth(size.mobileL),
    tablet: maxWidth(size.tablet),
    laptop: maxWidth(size.laptop),
    laptopM: maxWidth(size.laptopM),
    laptopL: maxWidth(size.laptopL),
    desktop: maxWidth(size.desktop),
    desktopL: maxWidth(size.desktopL),
}
