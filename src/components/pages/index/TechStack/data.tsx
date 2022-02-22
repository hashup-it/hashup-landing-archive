import nestJsImg from "/public/assets/home/tech-stack/nest-js.png"
import awsImg from "/public/assets/home/tech-stack/aws.png"
import bscImg from "/public/assets/home/tech-stack/binance-smart-chain.png"
import ethereumImg from "/public/assets/home/tech-stack/ethereum.png"
import etherscanImg from "/public/assets/home/tech-stack/etherscan.png"
import flutterImg from "/public/assets/home/tech-stack/flutter.png"
import nextImg from "/public/assets/home/tech-stack/next-js.png"
import polygonImg from "/public/assets/home/tech-stack/polygon.png"
import metamaskImg from "/public/assets/home/tech-stack/metamask.png"
import arweaveImg from "/public/assets/home/tech-stack/arweave.png"

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
