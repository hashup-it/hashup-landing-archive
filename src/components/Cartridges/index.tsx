import { ColoredText } from "components/Shared"
import { assetsUrl, CartridgeType } from "config"
import {
    StyledButton1,
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "__styles__/shared"
import Link from "next/link"
import { StyledBackgroundFlare, StyledCartridgesBox, StyledAnchor } from "./index.styles"

const cartridges: CartridgeType[] = [
    CartridgeType.blue,
    CartridgeType.green,
    CartridgeType.gold,
    CartridgeType.gray,
    CartridgeType.red,
]

const CartridgesBox = () => (
    <StyledCartridgesBox>
        {cartridges.map(item => (
            <>
                <img
                    src={assetsUrl(`2d-cartridges/without-extras/${item}.png`)}
                    className={item}
                    alt={`${item} cartridge`}
                    key={item}
                />
                {item === CartridgeType.gold && <div className="gold-glow" />}
            </>
        ))}
    </StyledCartridgesBox>
)

const Cartridges = () => (
    <StyledSectionWrapper>
        <StyledAnchor id="cartridges" />
        <StyledBackgroundFlare />
        <StyledSectionLabel>Cartridges</StyledSectionLabel>
        <StyledSectionTitle>
            1 Token <ColoredText>=</ColoredText> 1 Video Game<ColoredText>.</ColoredText>
            <br />
            Buy<ColoredText>2</ColoredText>Play
        </StyledSectionTitle>
        <StyledSectionParagraph>
            Cartridge with a video game on the Blockchain. You must have one piece of the game to
            play. Freely shape the rules of the secondary market as a Game Creator. Liquidity pools
            with video games!
        </StyledSectionParagraph>
        <CartridgesBox />
        <Link href="cartridges" passHref>
            <a>
                <StyledButton1>
                    Find out more about <ColoredText>Cartridges</ColoredText>
                </StyledButton1>
            </a>
        </Link>
    </StyledSectionWrapper>
)

export default Cartridges
