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
} from "./index.styles"

interface ValueBoxProps {
    readonly value: number
    readonly outlineColor: string
    readonly label?: string
    readonly shadow?: boolean
}

const ValueBox: FC<ValueBoxProps> = ({ value, label, outlineColor, shadow }) => (
    <StyledValueBox outlineColor={outlineColor} shadow={shadow}>
        {/* <div className="outline" /> */}
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

    return (
        <StyledResults>
            <StyledResultsDescription>
                <StyledResultsHeader>HashUp</StyledResultsHeader>
                <StyledResultsText>Z nami tyle trafia do Ciebie</StyledResultsText>
            </StyledResultsDescription>
            <ValueBox value={ourProfit} outlineColor={Swatches.primary_color} shadow />
            <StyledVersus>VS</StyledVersus>
            <ValueBox
                value={othersProfit}
                label="Tyle teraz dostajesz"
                outlineColor={Swatches.text_secondary}
            />
            <ValueBox
                value={ourProfit - othersProfit}
                label="Tyle tracisz na prowizjach"
                outlineColor={Swatches.text_secondary}
            />
        </StyledResults>
    )
}

export default Results
