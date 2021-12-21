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
import { StyledBackgroundFlare, StyledAnchor, StyledButtonBox, StyledImagesBox } from "./index.styles"

const ImagesBox = () => (
    <StyledImagesBox>
        <img
            className="laptop"
            src={assetsUrl("game-contract/laptop.png")}
            alt="GameContract website preview"
        />
        <img
            className="floating-website"
            src={assetsUrl("game-contract/floating-website.png")}
            alt="GameContract floating website preview"
        />
    </StyledImagesBox>
)

const Cartridges = () => (
    <StyledSectionWrapper>
        <StyledAnchor id="game-contract" />
        <StyledBackgroundFlare />
        <StyledSectionLabel>
            Game<ColoredText>Contract</ColoredText>.io
        </StyledSectionLabel>
        <StyledSectionTitle>
            Publish your game by creating
            <br />
            GameContract<ColoredText>!</ColoredText>
        </StyledSectionTitle>
        <StyledSectionParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam turpis eget urna
            condimentum, vel luctus turpis aliquet. Etiam in justo fermentum, fermentum arcu eu,
            tincidunt felis. Vestibulum sit amet tincidunt metus.
        </StyledSectionParagraph>
        <StyledButtonBox>
            <Link href="game-contract" passHref>
                <a>
                    <StyledButton1>
                        More about <ColoredText>GameContract</ColoredText>
                    </StyledButton1>
                </a>
            </Link>
        </StyledButtonBox>
        <ImagesBox />
    </StyledSectionWrapper>
)

export default Cartridges
