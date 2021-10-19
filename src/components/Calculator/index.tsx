import { ColoredText } from "../Shared"
import { CalculatorHeader, PercentBackground, StyledCalculator } from "./index.styles"

export const Calculator = () => {
    return (
        <StyledCalculator>
            <CalculatorHeader>
                Sprawdź ile <ColoredText>tracisz na prowizjach</ColoredText>, które pobierają popularne platformy wydawnicze
            </CalculatorHeader>
            <PercentBackground src="/assets/percent.png"/>
        </StyledCalculator>
    )
}