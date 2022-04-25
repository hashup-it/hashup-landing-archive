import { LogoInterface } from "components/pages/index/LogosContainer/interfaces"

import adSharesImg from "/public/assets/partners/adshares.png"
import tubblyImg from "/public/assets/partners/tubbly.png"
import blockchainAllianceImg from "/public/assets/partners/blockchain-alliance.png"
import adriaGamesImg from "/public/assets/partners/adria-games.png"
import unitedIdeasImg from "/public/assets/partners/united-ideas.png"
import flybridgeImg from "/public/assets/partners/flybridge.png"
import synapseImg from "/public/assets/partners/synapse.png"

export const partnersData: LogoInterface[] = [
    {
        className: "ad-shares",
        href: "https://adshares.net/",
        logoPath: adSharesImg,
        logoAlt: "AdShares",
    },
    {
        className: "tubbly",
        href: "https://tubbly.webflow.io/",
        logoPath: tubblyImg,
        logoAlt: "Tubbly",
    },
    {
        className: "blockchain-alliance",
        href: "https://www.blockalliance.io/",
        logoPath: blockchainAllianceImg,
        logoAlt: "Blockchain Alliance",
    },
    {
        className: "adria-games",
        href: "https://adriagames.com",
        logoPath: adriaGamesImg,
        logoAlt: "Adria Games",
    },
    {
        className: "united-ideas",
        href: "https://unitedideas.co/",
        logoPath: unitedIdeasImg,
        logoAlt: "United Ideas",
    },
    {
        className: "flybridge",
        href: "http://www.flybridgestudio.com/about",
        logoPath: flybridgeImg,
        logoAlt: "Flybridge",
    },
    {
        className: "synapse",
        href: "https://synapse.network/",
        logoPath: synapseImg,
        logoAlt: "Synapse",
    },
]
