import { ColoredText } from "components/Shared"
import { assetsUrl } from "config"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "__styles__/shared"
import { StyledImagesBox, StyledAnchor } from "./index.styles"

const ImagesBox = () => (
    <StyledImagesBox>
        <img
            className="tablet"
            src={assetsUrl("game-wallet/tablet.png")}
            alt="GameWallet tablet screen"
        />
        <img
            className="phone"
            src={assetsUrl("game-wallet/phone.png")}
            alt="GameWallet phone screen"
        />
        <img className="red-dots" src={assetsUrl("game-wallet/red-dots.png")} alt="" />
        <div className="flare" />
    </StyledImagesBox>
)

const GameWallet = () => (
    <>
        <StyledSectionWrapper>
            <StyledAnchor id="game-wallet" />
            <StyledSectionLabel>
                Game<ColoredText>Wallet</ColoredText>
            </StyledSectionLabel>
            <StyledSectionTitle>
                Store video games <br /> like cryptocurrencies<ColoredText>!</ColoredText>
            </StyledSectionTitle>
            <StyledSectionParagraph>
                Imagine if gamers were to decide the pricing of games!
                <br />
                <b>Buy</b> a game, <b>play</b> a game, <b>borrow</b> a game, <b>sell</b> a game.{" "}
                <br />
                With us, you will finally <b>own</b> the games!
            </StyledSectionParagraph>
        </StyledSectionWrapper>
        <ImagesBox />
    </>
)

export default GameWallet
