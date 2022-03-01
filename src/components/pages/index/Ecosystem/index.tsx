import { StyledBoxesArea } from "./index.styles"
import { Trans } from "react-i18next"
import Box from "./Box"
import { assetsUrl } from "config"
import SectionType2 from "components/shared/SectionType2"

const Ecosystem = () => (
    <SectionType2
        label={<Trans i18nKey="home.ecosystem.label" />}
        paragraph={<Trans i18nKey="home.ecosystem.paragraph" />}
        title={<Trans i18nKey="home.ecosystem.title" />}
        marginTop="120px"
    >
        <StyledBoxesArea>
            <Box
                index={0}
                icon={{
                    src: assetsUrl("random-icons/ecosystem/icon-gamecontract.svg"),
                    alt: "GameContract HashUp",
                }}
                link={{
                    href: "https://test.gamecontract.io",
                    title: "GameContract",
                }}
            />
            <Box
                index={1}
                icon={{
                    src: assetsUrl("random-icons/ecosystem/icon-gamexplorer.svg"),
                    alt: "GameXplorer HashUp",
                }}
                link={{
                    href: "https://test.gamexplorer.io",
                    title: "GameXplorer",
                }}
            />
            <Box
                index={2}
                icon={{
                    src: assetsUrl("random-icons/ecosystem/icon-gamecap.svg"),
                    alt: "GameCap HashUp",
                }}
                isDisabled
            />
        </StyledBoxesArea>
    </SectionType2>
)

export default Ecosystem
