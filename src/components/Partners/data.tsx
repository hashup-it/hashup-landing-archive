import { LogoInterface } from "components/LogosContainer/interfaces"
import { assetsUrl } from "config"

const partnersLogoUrl = (filename: string): string => assetsUrl(`partners/${filename}`)

export const partnersData: LogoInterface[] = [
    {
        className: "ad-shares",
        href: "https://adshares.net/",
        logoPath: partnersLogoUrl("adshares.png"),
        logoAlt: "AdShares",
    },
    {
        className: "tubbly",
        href: "https://tubbly.webflow.io/",
        logoPath: partnersLogoUrl("tubbly.png"),
        logoAlt: "Tubbly",
    },
    {
        className: "blockchain-alliance",
        href: "https://www.blockalliance.io/",
        logoPath: partnersLogoUrl("blockchain-alliance.png"),
        logoAlt: "Blockchain Alliance",
    },
    {
        className: "adria-games",
        href: "https://adriagames.com",
        logoPath: partnersLogoUrl("adria-games.png"),
        logoAlt: "Adria Games",
    },
    {
        className: "united-ideas",
        href: "https://unitedideas.co/",
        logoPath: partnersLogoUrl("united-ideas.png"),
        logoAlt: "United Ideas",
    },
    {
        className: "flybridge",
        href: "http://www.flybridgestudio.com/about",
        logoPath: partnersLogoUrl("flybridge.png"),
        logoAlt: "Flybridge",
    },
]
