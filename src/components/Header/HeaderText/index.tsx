import { ButtonOutlined, ColoredText } from "../../Shared"
import { ButtonGroup, GradientText, Header, HeaderAirdropIcon, HeaderAirdropWrapper, SmallText, StyledHeaderText } from "./index.styles"


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
                    <HeaderAirdropIcon>x</HeaderAirdropIcon>
                </HeaderAirdropWrapper>
            </ButtonGroup>
        </StyledHeaderText>
    )
}
