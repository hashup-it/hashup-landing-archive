import { StyledColoredText } from "components/shared/utils.styles"
import { assetsUrl } from "config"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "components/shared/section.styles"
import { StyledButton1 } from "components/shared/buttons.styles"
import Link from "next/link"
import {
    StyledBackgroundFlare,
    StyledAnchor,
    StyledButtonBox,
    StyledImagesBox,
} from "./index.styles"

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
            Game<StyledColoredText>Contract</StyledColoredText>.io
        </StyledSectionLabel>
        <StyledSectionTitle>
            Publish your game by creating
            <br />
            GameContract<StyledColoredText>!</StyledColoredText>
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
                        More about <StyledColoredText>GameContract</StyledColoredText>
                    </StyledButton1>
                </a>
            </Link>
        </StyledButtonBox>
        <ImagesBox />
    </StyledSectionWrapper>
)

export default Cartridges
