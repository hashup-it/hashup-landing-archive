import {
    StyledSectionLabel,
    StyledSectionParagraph,
    StyledSectionTitle,
    StyledSectionWrapper,
} from "components/shared/section.styles"
import { StyledBoxesArea } from "./index.styles"
import { Trans } from "react-i18next"
import Box from "./Box"
import { assetsUrl } from "config"

const Ecosystem = () => (
    <StyledSectionWrapper>
        <StyledSectionLabel>
            <Trans i18nKey="home.ecosystem.label" />
        </StyledSectionLabel>
        <StyledSectionTitle>
            <Trans i18nKey="home.ecosystem.title" />
        </StyledSectionTitle>
        <StyledSectionParagraph>
            <Trans i18nKey="home.ecosystem.paragraph" />
        </StyledSectionParagraph>
        <StyledBoxesArea>
            <Box
                index={0}
                icon={{
                    src: assetsUrl("ecosystem/icon-gamecontract.svg"),
                    alt: "GameContract HashUp",
                }}
                link={{
                    href: "https://test.gamecontract.io",
                    title: "GameContract"
                }}
            />
            <Box
                index={1}
                icon={{
                    src: assetsUrl("ecosystem/icon-gamexplorer.svg"),
                    alt: "GameXplorer HashUp",
                }}
                link={{
                    href: "https://test.gamexplorer.io",
                    title: "GameXplorer"
                }}
            />
            <Box
                index={2}
                icon={{
                    src: assetsUrl("ecosystem/icon-gamecap.svg"),
                    alt: "GameCap HashUp",
                }}
                isDisabled
            />
        </StyledBoxesArea>
    </StyledSectionWrapper>
)

export default Ecosystem
