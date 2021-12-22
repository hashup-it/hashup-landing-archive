import { StyledColoredText } from "components/shared/utils.styles"
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
                Game <StyledColoredText>Cap</StyledColoredText>
            </>
        ),
    },
    {
        iconFilename: "icon-gamewallet.svg",
        iconAlt: "Game Wallet",
        anchor: "game-wallet",
        label: (
            <>
                Game <StyledColoredText>Wallet</StyledColoredText>
            </>
        ),
    },
    {
        iconFilename: "icon-gamexplorer.svg",
        iconAlt: "Game Xplorer",
        anchor: "game-xplorer",
        label: (
            <>
                Game <StyledColoredText>Xplorer</StyledColoredText>
            </>
        ),
    },
    {
        iconFilename: "icon-gamecontract.svg",
        iconAlt: "Game Contract",
        anchor: "game-contract",
        label: (
            <>
                Game <StyledColoredText>Contract</StyledColoredText>
            </>
        ),
    },
]
