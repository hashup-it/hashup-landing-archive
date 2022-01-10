import nestJsImg from "/public/assets/tech-stack/nest-js.png"
import awsImg from "/public/assets/tech-stack/aws.png"
import bscImg from "/public/assets/tech-stack/binance-smart-chain.png"
import ethereumImg from "/public/assets/tech-stack/ethereum.png"
import etherscanImg from "/public/assets/tech-stack/etherscan.png"
import flutterImg from "/public/assets/tech-stack/flutter.png"
import nextImg from "/public/assets/tech-stack/next-js.png"
import polygonImg from "/public/assets/tech-stack/polygon.png"
import metamaskImg from "/public/assets/tech-stack/metamask.png"
import arweaveImg from "/public/assets/tech-stack/arweave.png"

interface LogoInterface {
    readonly className: string
    readonly href: string
    readonly logoPath: string
    readonly logoAlt: string
}

export const techStackData: LogoInterface[] = [
    {
        className: "nest-js",
        href: "https://nestjs.com/",
        logoPath: nestJsImg,
        logoAlt: "NestJS",
    },
    {
        className: "amazon-aws",
        href: "https://aws.amazon.com/",
        logoPath: awsImg,
        logoAlt: "Amazon AWS",
    },
    {
        className: "binance-smart-chain",
        href: "https://www.binance.org/en/smartChain",
        logoPath: bscImg,
        logoAlt: "Binance Smart Chain",
    },
    {
        className: "ethereum",
        href: "https://ethereum.org/en/",
        logoPath: ethereumImg,
        logoAlt: "Ethereum",
    },
    {
        className: "etherscan",
        href: "https://etherscan.io/",
        logoPath: etherscanImg,
        logoAlt: "Etherscan",
    },
    {
        className: "flutter",
        href: "https://flutter.dev/",
        logoPath: flutterImg,
        logoAlt: "Flutter",
    },
    {
        className: "next-js",
        href: "https://nextjs.org/",
        logoPath: nextImg,
        logoAlt: "NextJS",
    },
    {
        className: "polygon",
        href: "https://polygon.technology/",
        logoPath: polygonImg,
        logoAlt: "Polygon",
    },
    {
        className: "metamask",
        href: "https://metamask.io/",
        logoPath: metamaskImg,
        logoAlt: "Metamask",
    },
    {
        className: "arweave",
        href: "https://www.arweave.org/",
        logoPath: arweaveImg,
        logoAlt: "Arweave",
    },
]
