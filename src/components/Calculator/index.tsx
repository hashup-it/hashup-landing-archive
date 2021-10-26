import { ColoredText } from "../Shared"
import { Swatches } from "../../__styles__/Swatches"
import { CalculatorHeader, PercentBackground, StyledCalculator, StyledPriceLabel, StyledPriceLabelOutline, StyledResults, StyledResultsDescription, StyledResultsHeader, StyledResultsText, StyledResultWrapper, StyledSlidersContainer, StyledVersus, StyledVersusLine } from "./index.styles"
import Slider from "./Slider"

export const Calculator = () => {
    return (
        <StyledCalculator>
 
            <CalculatorHeader>
                Sprawdź ile <ColoredText>tracisz na prowizjach</ColoredText>, które pobierają popularne platformy wydawnicze
            </CalculatorHeader>
            <StyledSlidersContainer>
                <Slider 
                    label="Ilość sprz. kopii"
                />
                <Slider 
                    label="Początkowa cena twojej gry"
                />
            </StyledSlidersContainer>  
            <StyledResults>
                <StyledResultsDescription>
                    <StyledResultsHeader>
                        HashUp
                    </StyledResultsHeader>
                    <StyledResultsText>
                        Z nami tyle trafia do Ciebie
                    </StyledResultsText>
                </StyledResultsDescription>
                <StyledPriceLabel>
                    xD
                    <StyledPriceLabelOutline
                        outlineColor={Swatches.primary_darker}
                    />
                </StyledPriceLabel>
                <StyledVersus>
                    <StyledVersusLine/>
                        VS
                    <StyledVersusLine/>
                </StyledVersus>
                <StyledResultWrapper>
                    <StyledPriceLabel>
                        xD
                        <StyledPriceLabelOutline
                            outlineColor={Swatches.text_secondary}
                        />
                    </StyledPriceLabel>
                    <StyledResultsText>
                        Tyle teraz dostajesz
                    </StyledResultsText>
                </StyledResultWrapper>
                <StyledResultWrapper>
                    <StyledPriceLabel>
                        xD
                        <StyledPriceLabelOutline
                            outlineColor={Swatches.text_secondary}
                        />
                    </StyledPriceLabel>
                    <StyledResultsText>
                        Tyle tracisz na prowizjach
                    </StyledResultsText>
                </StyledResultWrapper>
            </StyledResults>
            <PercentBackground src="/assets/percent.png"/>
        </StyledCalculator>
    )
}
