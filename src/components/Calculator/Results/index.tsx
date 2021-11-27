import { FC } from "react"
import { Swatches } from "__styles__/Swatches"
import { calcOthersProfit, calcOurProfit } from "./logic"
import numeral from "numeral"
import {
    StyledResults,
    StyledResultsDescription,
    StyledResultsHeader,
    StyledResultsText,
    StyledValueBox,
    StyledVersus,
    StyledResultSection,
} from "./index.styles"
import { useTranslation } from "react-i18next"

interface ValueBoxProps {
    readonly value: number
    readonly outlineColor: string
    readonly label?: string
    readonly shadow?: boolean
}

const ValueBox: FC<ValueBoxProps> = ({ value, label, outlineColor, shadow }) => (
    <StyledValueBox outlineColor={outlineColor} shadow={shadow}>
        <div className="value">{numeral(value).format("0,0.[0]a")}</div>
        {label && <div className="label">{label}</div>}
    </StyledValueBox>
)

const Results: FC<{ readonly soldItems: number; readonly price: number }> = ({
    soldItems,
    price,
}) => {
    const othersProfit = calcOthersProfit(soldItems, price)
    const ourProfit = calcOurProfit(soldItems, price)
    const { t } = useTranslation()

    return (
        <StyledResults>
            <StyledResultSection>
                <StyledResultsDescription>
                    <StyledResultsHeader>HashUp</StyledResultsHeader>
                    <StyledResultsText>{t("calc.result")}</StyledResultsText>
                </StyledResultsDescription>
                <ValueBox value={ourProfit} outlineColor={Swatches.primary_color} shadow />
            </StyledResultSection>
            <StyledVersus>VS</StyledVersus>
            <StyledResultSection>
                <ValueBox
                    value={othersProfit}
                    label={t("calc.result-label-get")}
                    outlineColor={Swatches.text_secondary}
                />
                <ValueBox
                    value={ourProfit - othersProfit}
                    label={t("calc.result-label-lose")}
                    outlineColor={Swatches.text_secondary}
                />
            </StyledResultSection>
        </StyledResults>
    )
}

export default Results
