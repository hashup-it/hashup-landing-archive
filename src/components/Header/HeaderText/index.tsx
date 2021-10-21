import { ButtonOutlined, ColoredText } from "../../Shared"
import { ButtonGroup, GradientText, Header, HeaderAirdropIcon, HeaderAirdropWrapper, HeaderGetAirdrop, SmallText, StyledHeaderText } from "./index.styles"


export const HeaderText = () => {
    return (
        <StyledHeaderText>
            <Header>
                The <GradientText>HashUp</GradientText> Cartridge
                <ColoredText>.</ColoredText>
            </Header>
            <SmallText>
                DEFInitywna edycja nośnika licencji gry. Wymiana grami P2P między graczami. Kartridż na blockchain. Bez pośredników. Z&nbsp;0% prowizji. Skończymy monopol na rynku oprogramowania…
            </SmallText>
            <ButtonGroup>
                <ButtonOutlined>Whitepaper</ButtonOutlined>
                <HeaderAirdropWrapper>
                    <HeaderAirdropIcon></HeaderAirdropIcon>
                    <HeaderGetAirdrop>Get your airdrop</HeaderGetAirdrop>
                </HeaderAirdropWrapper>
            </ButtonGroup>
        </StyledHeaderText>
    )
}
