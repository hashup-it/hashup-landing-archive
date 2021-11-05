import { ButtonOutlined, ColoredText } from "../../Shared"
import { Hyperlink, SmallHeaderText, TabHeader } from "../../Shared/sections.styles"
import {
    ButtonGroup,
    GradientText,
    HeaderAirdropIcon,
    HeaderAirdropWrapper,
    HeaderGetAirdrop,
    StyledLandingHeaderText,
} from "./index.styles"
import { useTranslation } from "react-i18next"

export const HeaderText = () => {
    const { t } = useTranslation()

    return (
        <StyledLandingHeaderText>
            <TabHeader>
                The <GradientText>HashUp</GradientText> Cartridge
                <ColoredText>.</ColoredText>
            </TabHeader>
            <SmallHeaderText>{t("header-par")}</SmallHeaderText>
            <ButtonGroup>
                <ButtonOutlined href="/documents/Whitepaper.pdf">Whitepaper</ButtonOutlined>
                <HeaderAirdropWrapper>
                    <HeaderAirdropIcon />
                    <HeaderGetAirdrop>
                        <Hyperlink href="/#airdrop">{t("header-airdrop")}</Hyperlink>
                    </HeaderGetAirdrop>
                </HeaderAirdropWrapper>
            </ButtonGroup>
        </StyledLandingHeaderText>
    )
}
