import { ButtonOutlined, ColoredText } from "../Shared"
import { LeftWrapper, RightWrapper, SectionBottomLeftPhoto, SectionContainer, SectionHeader, SectionLabel, SectionPhoto, SectionText } from "../Shared/sections.styles"
import { StyledGamExplorer} from "./index.styles"

export const GamExplorer = () => {
    return (
        <StyledGamExplorer>
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel>Listing cen kartridży</SectionLabel>
                    <SectionHeader>
                        <ColoredText>GameCap</ColoredText>.io - miejsce, gdzie poznamy cenę oprogramowania<ColoredText>.</ColoredText>
                    </SectionHeader>
                    <SectionText>
                    Konsekwencją oddania w ręce graczy pełnię praw nad cyfrowym nośnikiem licencji jest ich wolnorynkowa cena. Istnieje więc potrzeba na pojawienie się miejsca, które będzie indeksować wszystkie kartridże oraz zmiany ich cen w czasie. Chcąc jak najwierniej przenieść model powstawania kryptowalut do powstawania gier zdecydowaliśmy się, że zainspirujemy się CoinMarketCap’em, czyli platformą listującą wszystkie kryptowaluty.
                    </SectionText>
                    
                </LeftWrapper>
                <RightWrapper>
                    <SectionPhoto url="/assets/section-photos/photo1.png">
                        <SectionBottomLeftPhoto src="/assets/section-photos/photo2.png"/>
                    </SectionPhoto>
                </RightWrapper>
            </SectionContainer>
        </StyledGamExplorer>
    )
}