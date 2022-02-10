import { assetsUrl } from "config"

export const Materials = {
    promoVideo: "https://cdn.hashup.it/landing/hashup-video.mp4",
    logosAndBrand: "https://cdn.hashup.it/landing/HashUp_Logo.zip",
    jankowskiPhoto: assetsUrl("media/szymon-jankowski.png"),
    szydlowskiPhoto: assetsUrl("media/filip-szydlowski.png"),
} as const

export const Urls = {
    promoVideo: "https://youtube.com/test",
}
