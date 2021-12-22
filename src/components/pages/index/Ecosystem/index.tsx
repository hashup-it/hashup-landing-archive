import { FC } from "react"
import { StyledColoredText } from "components/shared/utils.styles"
import { StyledIconsWrapper, StyledIconBox, StyledImagesBox, StyledSeparator } from "./index.styles"
import { iconsData } from "./data"
import { assetsUrl } from "config"
import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "components/shared/section.styles"

export interface IconInterface {
    readonly label: JSX.Element
    readonly iconFilename: string
    readonly iconAlt: string
    readonly anchor: string
}

const Icon: FC<IconInterface> = ({ anchor, label, iconFilename, iconAlt }) => (
    <StyledIconBox href={`#${anchor}`} title={iconAlt}>
        <img src={assetsUrl(`our-ecosystem/${iconFilename}`)} className="icon" alt={iconAlt} />
        <div className="label">{label}</div>
    </StyledIconBox>
)

const Icons = () => (
    <StyledIconsWrapper>
        {iconsData.map((item, index) => (
            <Icon {...item} key={index} />
        ))}
    </StyledIconsWrapper>
)

const Images = () => (
    <StyledImagesBox>
        <img className="laptop" src={assetsUrl("our-ecosystem/laptop.png")} alt="GameCap Laptop" />
        <div className="flare" />
    </StyledImagesBox>
)

const Ecosystem = () => (
    <>
        <StyledSectionWrapper>
            <StyledSectionLabel>Our Ecosystem</StyledSectionLabel>
            <StyledSectionTitle>
                A new method of distributing <br />
                video games<StyledColoredText>.</StyledColoredText>
            </StyledSectionTitle>
            <StyledSectionParagraph>
                Video Game Cartridges on the Blochchain. Decentralized cryptocurrency distribution
                model moved to video game publishing.
            </StyledSectionParagraph>
            <Icons />
            <Images />
        </StyledSectionWrapper>
        <StyledSeparator />
    </>
)

export default Ecosystem
