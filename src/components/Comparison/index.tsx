import { FunctionComponent } from 'react'
import { ColoredText } from '../Shared'
import { Swatches } from '../../__styles__/Swatches'
import {
    ComparisonItem,
    ComparisonItemContent,
    LineText,
    StyledComparison,
    StyledComparisonText,
    StyledCon,
    StyledPlus,
    StyledPro,
    StyledWrapper
} from './index.styles'

interface ComparisonProps {

}

const Comparison: FunctionComponent<ComparisonProps> = () => {
    return (
        <StyledComparison>
            <StyledComparisonText>Dystrybucja tradycyjna</StyledComparisonText>
            <StyledComparisonText>Dystrybucja cyfrowa</StyledComparisonText>
            <StyledComparisonText>Dystrybucja z <ColoredText>#</ColoredText></StyledComparisonText>
            <StyledWrapper>
                <LineText color={Swatches.primary_color}>Gains</LineText>
            </StyledWrapper>

            <ComparisonItem outlineColor={Swatches.primary_color}>
                <ComparisonItemContent>
                    <StyledPro>Rynek wtórny</StyledPro>
                    <StyledPro>Pełnia praw do produktu</StyledPro>
                </ComparisonItemContent>
            </ComparisonItem>
            <ComparisonItem outlineColor={Swatches.primary_color}>
                <ComparisonItemContent>
                    <StyledPro>Wygoda</StyledPro>
                    <StyledPro>Brak nośnika</StyledPro>
                    <StyledPlus>+</StyledPlus>
                </ComparisonItemContent>
                <StyledPlus>+</StyledPlus>
            </ComparisonItem>
            <ComparisonItem outlineColor={Swatches.primary_color}>
                <ComparisonItemContent>
                    <StyledPro>Brak pośredników</StyledPro>
                    <StyledPro>Wolnorynkowa cena</StyledPro>
                    <StyledPlus>+</StyledPlus>
                </ComparisonItemContent>
            </ComparisonItem>
            <StyledWrapper>
                <LineText color={Swatches.text_secondary}>Losses</LineText>
            </StyledWrapper>
            <ComparisonItem outlineColor={Swatches.text_secondary}>
                <ComparisonItemContent>
                    <StyledCon>Brak wygody</StyledCon>
                    <StyledCon>Zniszczalny nośnik</StyledCon>
                    <StyledCon>Wysokie prowizje</StyledCon>
                </ComparisonItemContent>
            </ComparisonItem>

            <ComparisonItem outlineColor={Swatches.text_secondary}>
                <ComparisonItemContent>
                    <StyledCon>Brak pełnych praw</StyledCon>
                    <StyledCon>Brak rynku wtórnego</StyledCon>
                    <StyledCon>Wysokie prowizje</StyledCon>
                </ComparisonItemContent>
            </ComparisonItem>
        </StyledComparison>
    )
}

export default Comparison
