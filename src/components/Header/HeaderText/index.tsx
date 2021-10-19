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
                DEFInitive edition of game license carrier
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
