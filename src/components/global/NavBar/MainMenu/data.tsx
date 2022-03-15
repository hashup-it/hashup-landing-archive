import { EcosystemItemProps } from "./index"

export const ecosystemData: EcosystemItemProps[] = [
    {
        href: "/gamecontract",
        label: "GameContract",
    },
    {
        href: "/gamewallet",
        label: "GameWallet"
    }
]

export const allEcosystemUrls = ecosystemData.map(item => item.href)
