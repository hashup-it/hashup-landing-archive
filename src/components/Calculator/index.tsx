import { useState, useMemo } from "react"
import { ColoredText } from "../Shared"
import Slider from "./Slider"
import Results from "./Results"
import numeral from "numeral"
import {
    StyledHeader,
    StyledBackgroundImg,
    StyledCalculator,
    StyledSlidersContainer,
    StyledBackgroundFlare,
} from "./index.styles"
import { useTranslation } from "react-i18next"
import { randomInt } from "util/math"

const Calculator = () => {
    const [price, setPrice] = useState<number>(0)
    const [soldItems, setSoldItems] = useState<number>(0)
    const { t } = useTranslation()
    const initPrice = useMemo(() => randomInt(40, 80) * 10000, [])
    const initSoldItems = useMemo(() => randomInt(15, 80), [])

    return (
        <StyledCalculator>
            <StyledHeader>
                {t("calc.check-how")}
                <ColoredText>{t("calc.check-losing")}</ColoredText>
                {t("calc.check-charged")}
            </StyledHeader>
            <StyledSlidersContainer>
                <Slider
                    min={10000}
                    max={1000000}
                    step={10000}
                    displayValue={numeral(soldItems).format("0a")}
                    setValue={setSoldItems}
                    label={t("calc.slider-label")}
                    dotsValues={["10k", "250k", "500k", "750k", "1m"]}
                    defaultValue={initPrice}
                />
                <Slider
                    min={1}
                    max={100}
                    step={1}
                    displayValue={`${price}$`}
                    setValue={setPrice}
                    label={t("calc.price")}
                    dotsValues={["1$", "25$", "50$", "75$", "100$"]}
                    defaultValue={initSoldItems}
                />
            </StyledSlidersContainer>
            <Results soldItems={soldItems} price={price} />
            <StyledBackgroundImg />
            <StyledBackgroundFlare />
        </StyledCalculator>
    )
}

export default Calculator
