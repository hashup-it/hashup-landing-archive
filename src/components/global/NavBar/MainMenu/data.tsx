import { EcosystemItemProps } from "./index"

export const ecosystemData: EcosystemItemProps[] = [
    {
        href: "/gamecontract",
        label: "GameContract",
    },
    {
        href: "/gamewallet",
        label: "GameWallet",
    },
    {
        href: "/gamexplorer",
        label: "GameXplorer",
    },
    {
        href: "/gamecap",
        label: "GameCap",
    },
]

export const allEcosystemUrls = ecosystemData.map(item => item.href)
