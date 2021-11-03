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

export const HeaderText = () => {
    return (
        <StyledLandingHeaderText>
            <TabHeader>
                The <GradientText>HashUp</GradientText> Cartridge
                <ColoredText>.</ColoredText>
            </TabHeader>
            <SmallHeaderText>
                DEFInitywna edycja nośnika licencji gry. Wymiana grami P2P między graczami. Kartridż
                na blockchain. Bez pośredników. Z&nbsp;0% prowizji. Skończymy monopol na rynku
                oprogramowania…
            </SmallHeaderText>
            <ButtonGroup>
                <ButtonOutlined href="/documents/Whitepaper.pdf">Whitepaper</ButtonOutlined>
                <HeaderAirdropWrapper>
                    <HeaderAirdropIcon />
                    <HeaderGetAirdrop><Hyperlink href="/airdrop.html">Odbierz swój Airdrop</Hyperlink></HeaderGetAirdrop>
                </HeaderAirdropWrapper>
            </ButtonGroup>
        </StyledLandingHeaderText>
    )
}
