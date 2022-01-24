export const GLOBAL_CONTENT_WIDTH_PX: number = 1240
export const GLOBAL_HORIZONTAL_PADDING_PX: number = 15

export const Swatches = {
    background_main: "#101010",
    background_secondary: "#050505",
    primary_color: "#FF3F3F",
    inactive: "#CDCDCD",
    text_main: "#FFFFFF",
    text_secondary: "#ADADAD",
} as const

export const RawDeviceWidthPx = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopM: 1320,
    laptopL: 1440,
    desktop: 1920,
    desktopL: 2560,
} as const

export const DeviceWidth = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopM: "1320px",
    laptopL: "1440px",
    desktop: "1920px",
    desktopL: "2560px",
} as const

export const minHeight = (height: string): string => `@media(min-height: ${height})`
export const maxWidth = (width: string): string => `@media(max-width: ${width})`

export const MediaQuery = {
    mobileS: maxWidth(DeviceWidth.mobileS),
    mobileM: maxWidth(DeviceWidth.mobileM),
    mobileL: maxWidth(DeviceWidth.mobileL),
    tablet: maxWidth(DeviceWidth.tablet),
    laptop: maxWidth(DeviceWidth.laptop),
    laptopM: maxWidth(DeviceWidth.laptopM),
    laptopL: maxWidth(DeviceWidth.laptopL),
    desktop: maxWidth(DeviceWidth.desktop),
    desktopL: maxWidth(DeviceWidth.desktopL),
} as const
