import { ColoredText } from '../Shared'
import { LeftWrapper, RightWrapper, SectionHeader, SectionLabel, SectionText } from '../Shared/sections.styles'
import {
    AboutCard,
    BackgroundWorld,
    CardHeader,
    CardLine,
    CardParticles,
    Cards,
    RadialGradient,
    SectionContainer,
    StyledAboutUs
} from './index.styles'

export const AboutUs = () => {


    return (
        <StyledAboutUs>
            <SectionContainer>
                <LeftWrapper>
                    <SectionLabel><ColoredText>UWOLNIJ SIĘ</ColoredText></SectionLabel>
                    <SectionHeader>
                        <ColoredText>Wolny</ColoredText> rynek gier i&nbsp;oprogramowania
                    </SectionHeader>
                    <SectionText>
                        Rynek wolnego oprogramowania jest naturalną konsekwencją oddania oprogramowania w ręce graczy.
                        Handlujcie grami! Wolny rynek odkryje prawdziwą cenę oprogramowania.
                    </SectionText>
                </LeftWrapper>
                <RightWrapper>
                    <Cards>
                        <AboutCard>
                            <RadialGradient />
                            <CardLine />
                            <CardHeader>Dystrybucja w Twoich rękach</CardHeader>
                            Kontroluj cenę gry i liczbę wydanych licencji. Zarabiaj pieniądze na rynku wtórnym. Wszystko
                            pod Twoją kontrolą.
                        </AboutCard>
                        <AboutCard>
                            <CardParticles />
                            <CardLine />
                            <CardHeader>Brak prowizji</CardHeader>
                            Jesteś jedynym wydawcą. Nie pozwól nikomu zarabiać na twojej ciężkiej pracy. Zarobisz w ten
                            sposób więcej pieniędzy, czy obniżysz cenę gry, aby dotrzeć do większej liczby odbiorców?
                            Decyzja należy do Ciebie! </AboutCard>
                    </Cards>
                </RightWrapper>
            </SectionContainer>
            <BackgroundWorld />

        </StyledAboutUs>
    )
}
