import { EcosystemItemProps } from "./index"

export const ecosystemData: EcosystemItemProps[] = [
    {
        href: "/gamecap",
        label: "GameCap",
    },
]

export const allEcosystemUrls = ecosystemData.map(item => item.href)
