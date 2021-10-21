import { ButtonOutlined, ColoredText } from "../Shared"
import { LeftWrapper, RightWrapper, SectionContainer, SectionHeader, SectionLabel, SectionText } from "../Shared/sections.styles"
import { StyledCreateCartridges} from "./index.styles"

export const CreateCartridges = () => {
    return (
        <StyledCreateCartridges>
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel>Listing cen kartridży</SectionLabel>
                    <SectionHeader>
                        <ColoredText>GameCap</ColoredText>.io - miejsce, gdzie poznamy cenę oprogramowania<ColoredText>.</ColoredText>
                    </SectionHeader>
                    <SectionText>
                    Konsekwencją oddania w ręce graczy pełnię praw nad cyfrowym nośnikiem licencji jest ich wolnorynkowa cena. Istnieje więc potrzeba na pojawienie się miejsca, które będzie indeksować wszystkie kartridże oraz zmiany ich cen w czasie. Chcąc jak najwierniej przenieść model powstawania kryptowalut do powstawania gier zdecydowaliśmy się, że zainspirujemy się CoinMarketCap’em, czyli platformą listującą wszystkie kryptowaluty.
                    </SectionText>
                    <ButtonOutlined>Go to gamecap.io</ButtonOutlined>
                </LeftWrapper>
                <RightWrapper>
                   
                </RightWrapper>
            </SectionContainer>
        </StyledCreateCartridges>
    )
}