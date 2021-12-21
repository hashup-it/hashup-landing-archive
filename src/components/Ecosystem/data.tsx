import { ColoredText } from "components/Shared"
import { IconInterface } from "."

export const iconsData: IconInterface[] = [
    {
        iconFilename: "icon-cartridges.svg",
        iconAlt: "Cartridges",
        anchor: "cartridges",
        label: <>Cartridges</>,
    },
    {
        iconFilename: "icon-gamecap.svg",
        iconAlt: "Game Cap",
        anchor: "game-cap",
        label: (
            <>
                Game <ColoredText>Cap</ColoredText>
            </>
        ),
    },
    {
        iconFilename: "icon-gamewallet.svg",
        iconAlt: "Game Wallet",
        anchor: "game-wallet",
        label: (
            <>
                Game <ColoredText>Wallet</ColoredText>
            </>
        ),
    },
    {
        iconFilename: "icon-gamexplorer.svg",
        iconAlt: "Game Xplorer",
        anchor: "game-xplorer",
        label: (
            <>
                Game <ColoredText>Xplorer</ColoredText>
            </>
        ),
    },
    {
        iconFilename: "icon-gamecontract.svg",
        iconAlt: "Game Contract",
        anchor: "game-contract",
        label: (
            <>
                Game <ColoredText>Contract</ColoredText>
            </>
        ),
    },
]
