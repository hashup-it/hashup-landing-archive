import { assetsUrl } from "config"

export const Materials = {
    promoVideo: assetsUrl("media/hashup-promo-video.mp4"),
    logosAndBrand: assetsUrl("media/hashup-brand.zip"),
    jankowskiPhoto: assetsUrl("media/szymon-jankowski.png"),
    szydlowskiPhoto: assetsUrl("media/filip-szydlowski.png"),
} as const

export const Urls = {
    promoVideo: 'https://youtube.com/test'
}