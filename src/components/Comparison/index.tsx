import { FunctionComponent } from "react";
import { ColoredText, StyledContainerOutline } from "../Shared";
import { Swatches } from "../Swatches";
import { ComparisonItem, ComparisonItemContent, LineText, StyledComparison, StyledComparisonText, StyledCon, StyledPro } from "./index.styles";

interface ComparisonProps {
    
}
 
const Comparison: FunctionComponent<ComparisonProps> = () => {
    return (
        <StyledComparison>
            <StyledComparisonText>Dystrybucja tradycyjna</StyledComparisonText>
            <StyledComparisonText>Dystrybucja cyfrowa</StyledComparisonText>
            <StyledComparisonText>Dystrybucja z <ColoredText>#</ColoredText></StyledComparisonText>
            <ComparisonItem outlineColor={Swatches.primary_color}>
                <LineText color={Swatches.primary_color}>Gains</LineText>
                <ComparisonItemContent>
                    <StyledPro>Rynek wtórny</StyledPro>
                    <StyledPro>Pełnia praw do produktu</StyledPro>
                </ComparisonItemContent>
            </ComparisonItem>
            <ComparisonItem outlineColor={Swatches.primary_color}>
                
                <ComparisonItemContent>
                    <StyledPro>Wygoda</StyledPro>
                    <StyledPro>Brak nośnika</StyledPro>
                </ComparisonItemContent>
            </ComparisonItem>
            <ComparisonItem outlineColor={Swatches.primary_color}>
                <ComparisonItemContent>
                    <StyledPro>Brak pośredników</StyledPro>
                    <StyledPro>Wolnorynkowa cena</StyledPro>
                </ComparisonItemContent>
            </ComparisonItem>
            <ComparisonItem outlineColor={Swatches.text_secondary}>
                <LineText color={Swatches.text_secondary}>Losses</LineText>
                <ComparisonItemContent>
                    <StyledCon>Brak wygody</StyledCon>
                    <StyledCon>Zniszczalny nośnik</StyledCon>
                    <StyledCon>Wysokie prowizje</StyledCon>
                </ComparisonItemContent>
            </ComparisonItem>
            <ComparisonItem outlineColor={Swatches.text_secondary}>
                <ComparisonItemContent>
                    <StyledCon>Brak wygody</StyledCon>
                    <StyledCon>Zniszczalny nośnik</StyledCon>
                    <StyledCon>Wysokie prowizje</StyledCon>
                </ComparisonItemContent>
            </ComparisonItem>
        </StyledComparison>
    );
}
 
export default Comparison;