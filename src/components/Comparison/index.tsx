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
            <StyledComparisonText>{t("comp-traditional")}</StyledComparisonText>
            <StyledComparisonText>{t("comp-digital")}</StyledComparisonText>
            <StyledComparisonText>
                {t("comp-distribution-with")}
                <ColoredText>#</ColoredText>
            </StyledComparisonText>
            <StyledWrapper>
                <LineText color={Swatches.primary_color}>{t("comp-gains")}</LineText>
            </StyledWrapper>

            <ComparisonItem outlineColor={Swatches.primary_color}>
                <ComparisonItemContent>
                    <StyledPro>{t("comp-aftermarket")}</StyledPro>
                    <StyledPro>{t("comp-rights")}</StyledPro>
                </ComparisonItemContent>
            </ComparisonItem>
            <ComparisonItem outlineColor={Swatches.primary_color}>
                <ComparisonItemContent>
                    <StyledPro>{t("comp-comfort")}</StyledPro>
                    <StyledPro>{t("comp-carrier")}</StyledPro>
                    <StyledPlus>+</StyledPlus>
                </ComparisonItemContent>
                <StyledPlus>+</StyledPlus>
            </ComparisonItem>
            <ComparisonItem outlineColor={Swatches.primary_color}>
                <ComparisonItemContent>
                    <StyledPro>{t("comp-intermediaries")}</StyledPro>
                    <StyledPro>{t("comp-freemarket")}</StyledPro>
                    <StyledPlus>+</StyledPlus>
                </ComparisonItemContent>
            </ComparisonItem>
            <StyledWrapper>
                <LineText color={Swatches.text_secondary}>{t("comp-losses")}</LineText>
            </StyledWrapper>
            <ComparisonItem outlineColor={Swatches.text_secondary}>
                <ComparisonItemContent>
                    <StyledCon>{t("comp-ncomfort")}</StyledCon>
                    <StyledCon>{t("comp-ncarrier")}</StyledCon>
                    <StyledCon>{t("comp-commisions")}</StyledCon>
                </ComparisonItemContent>
            </ComparisonItem>

            <ComparisonItem outlineColor={Swatches.text_secondary}>
                <ComparisonItemContent>
                    <StyledCon>{t("comp-nrights")}</StyledCon>
                    <StyledCon>{t("comp-naftermarket")}</StyledCon>
                    <StyledCon>{t("comp-commisions")}</StyledCon>
                </ComparisonItemContent>
            </ComparisonItem>
        </StyledComparison>
    )
}

export default Comparison
