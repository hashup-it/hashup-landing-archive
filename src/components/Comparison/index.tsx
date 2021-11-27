import { FunctionComponent } from "react"
import { ColoredText } from "../Shared"
import { Swatches } from "../../__styles__/Swatches"
import {
    ComparisonItem,
    ComparisonItemContent,
    LineText,
    StyledComparison,
    StyledComparisonText,
    StyledCon,
    StyledPlus,
    StyledPro,
    StyledWrapper,
} from "./index.styles"
import { useTranslation } from "react-i18next"

interface ComparisonProps {}

const Comparison: FunctionComponent<ComparisonProps> = () => {
    const { t } = useTranslation()

    return (
        <StyledComparison>
            <StyledComparisonText>{t("comparison.traditional")}</StyledComparisonText>
            <StyledComparisonText>{t("comparison.digital")}</StyledComparisonText>
            <StyledComparisonText>
                {t("comparison.distribution-with")}
                <ColoredText>#</ColoredText>
            </StyledComparisonText>
            <StyledWrapper>
                <LineText color={Swatches.primary_color}>{t("comparison.gains")}</LineText>
            </StyledWrapper>

            <ComparisonItem outlineColor={Swatches.primary_color}>
                <ComparisonItemContent>
                    <StyledPro>{t("comparison.aftermarket")}</StyledPro>
                    <StyledPro>{t("comparison.rights")}</StyledPro>
                </ComparisonItemContent>
            </ComparisonItem>
            <ComparisonItem outlineColor={Swatches.primary_color}>
                <ComparisonItemContent>
                    <StyledPro>{t("comparison.comfort")}</StyledPro>
                    <StyledPro>{t("comparison.carrier")}</StyledPro>
                </ComparisonItemContent>
                <StyledPlus>+</StyledPlus>
            </ComparisonItem>
            <ComparisonItem outlineColor={Swatches.primary_color}>
                <ComparisonItemContent>
                    <StyledPro>{t("comparison.intermediaries")}</StyledPro>
                    <StyledPro>{t("comparison.freemarket")}</StyledPro>
                    <StyledPlus>+</StyledPlus>
                </ComparisonItemContent>
            </ComparisonItem>
            <StyledWrapper>
                <LineText color={Swatches.text_secondary}>{t("comparison.losses")}</LineText>
            </StyledWrapper>
            <ComparisonItem outlineColor={Swatches.text_secondary}>
                <ComparisonItemContent>
                    <StyledCon>{t("comparison.ncomfort")}</StyledCon>
                    <StyledCon>{t("comparison.ncarrier")}</StyledCon>
                    <StyledCon>{t("comparison.commisions")}</StyledCon>
                </ComparisonItemContent>
            </ComparisonItem>

            <ComparisonItem outlineColor={Swatches.text_secondary}>
                <ComparisonItemContent>
                    <StyledCon>{t("comparison.nrights")}</StyledCon>
                    <StyledCon>{t("comparison.naftermarket")}</StyledCon>
                    <StyledCon>{t("comparison.commisions")}</StyledCon>
                </ComparisonItemContent>
            </ComparisonItem>
        </StyledComparison>
    )
}

export default Comparison
