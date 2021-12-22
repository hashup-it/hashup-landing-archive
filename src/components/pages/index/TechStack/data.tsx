import { assetsUrl } from "config"

interface LogoInterface {
    readonly className: string
    readonly href: string
    readonly logoPath: string
    readonly logoAlt: string
}

const techLogoUrl = (filename: string): string => assetsUrl(`tech-stack/${filename}`)

export const techStackData: LogoInterface[] = [
    {
        className: "nest-js",
        href: "https://nestjs.com/",
        logoPath: techLogoUrl("nest-js.png"),
        logoAlt: "NestJS",
    },
    {
        className: "amazon-aws",
        href: "https://aws.amazon.com/",
        logoPath: techLogoUrl("aws.png"),
        logoAlt: "Amazon AWS",
    },
    {
        className: "binance-smart-chain",
        href: "https://www.binance.org/en/smartChain",
        logoPath: techLogoUrl("binance-smart-chain.png"),
        logoAlt: "Binance Smart Chain",
    },
    {
        className: "ethereum",
        href: "https://ethereum.org/en/",
        logoPath: techLogoUrl("ethereum.png"),
        logoAlt: "Ethereum",
    },
    {
        className: "etherscan",
        href: "https://etherscan.io/",
        logoPath: techLogoUrl("etherscan.png"),
        logoAlt: "Etherscan",
    },
    {
        className: "flutter",
        href: "https://flutter.dev/",
        logoPath: techLogoUrl("flutter.png"),
        logoAlt: "Flutter",
    },
    {
        className: "next-js",
        href: "https://nextjs.org/",
        logoPath: techLogoUrl("next-js.png"),
        logoAlt: "NextJS",
    },
    {
        className: "polygon",
        href: "https://polygon.technology/",
        logoPath: techLogoUrl("polygon.png"),
        logoAlt: "Polygon",
    },
    {
        className: "metamask",
        href: "https://metamask.io/",
        logoPath: techLogoUrl("metamask.png"),
        logoAlt: "Metamask",
    },
    {
        className: "arweave",
        href: "https://www.arweave.org/",
        logoPath: techLogoUrl("arweave.png"),
        logoAlt: "Arweave",
    },
]
