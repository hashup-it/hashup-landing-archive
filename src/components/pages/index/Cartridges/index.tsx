import { StyledColoredText } from "components/shared/utils.styles"
import { assetsUrl, CartridgeType } from "config"
import { StyledButton1 } from "components/shared/buttons.styles"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "components/shared/section.styles"
import Link from "next/link"
import { StyledBackgroundFlare, StyledCartridgesBox, StyledAnchor } from "./index.styles"
import React from "react"

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
            <React.Fragment key={item}>
                <img
                    src={assetsUrl(`2d-cartridges/without-extras/${item}.png`)}
                    className={item}
                    alt={`${item} cartridge`}
                />
                {item === CartridgeType.gold && <div className="gold-glow" />}
            </React.Fragment>
        ))}
    </StyledCartridgesBox>
)

const Cartridges = () => (
    <StyledSectionWrapper>
        <StyledAnchor id="cartridges" />
        <StyledBackgroundFlare />
        <StyledSectionLabel>Cartridges</StyledSectionLabel>
        <StyledSectionTitle>
            1 Token <StyledColoredText>=</StyledColoredText> 1 Video Game<StyledColoredText>.</StyledColoredText>
            <br />
            Buy<StyledColoredText>2</StyledColoredText>Play
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
                    Find out more about <StyledColoredText>Cartridges</StyledColoredText>
                </StyledButton1>
            </a>
        </Link>
    </StyledSectionWrapper>
)

export default Cartridges
