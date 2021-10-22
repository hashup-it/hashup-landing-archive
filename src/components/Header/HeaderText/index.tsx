import { ButtonOutlined, ColoredText } from '../../Shared'
import { Hyperlink } from '../../Shared/sections.styles'
import {
    ButtonGroup,
    GradientText,
    Header,
    HeaderAirdropIcon,
    HeaderAirdropWrapper,
    HeaderGetAirdrop,
    SmallText,
    StyledHeaderText
} from './index.styles'

export const HeaderText = () => {
    return (
        <StyledHeaderText>
            <Header>
                The <GradientText>HashUp</GradientText> Cartridge
                <ColoredText>.</ColoredText>
            </Header>
            <SmallText>
                DEFInitywna edycja nośnika licencji gry. Wymiana grami P2P między graczami. Kartridż na blockchain. Bez
                pośredników. Z&nbsp;0% prowizji. Skończymy monopol na rynku oprogramowania…
            </SmallText>
            <ButtonGroup>
                <ButtonOutlined href="/documents/Whitepaper.pdf">
                    Whitepaper
                </ButtonOutlined>
                <HeaderAirdropWrapper>
                    <HeaderAirdropIcon />
                    <HeaderGetAirdrop><Hyperlink href="/airdrop.html">Get your airdrop</Hyperlink></HeaderGetAirdrop>
                </HeaderAirdropWrapper>
            </ButtonGroup>
        </StyledHeaderText>
    )
}
