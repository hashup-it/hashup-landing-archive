import { useState } from "react"
import { ColoredText } from "../Shared"
import Slider from "./Slider"
import Results from "./Results"
import numeral from "numeral"
import {
    StyledHeader,
    StyledBackgroundImg,
    StyledCalculator,
    StyledSlidersContainer,
} from "./index.styles"
import { useTranslation } from "react-i18next"

const Calculator = () => {
    const [price, setPrice] = useState<number>(0)
    const [soldItems, setSoldItems] = useState<number>(0)

    const { t } = useTranslation()

    return (
        <StyledCalculator>
            <StyledHeader>
                {t("calc-check1")}
                <ColoredText>{t("calc-check2")}</ColoredText>
                {t("calc-check3")}
            </StyledHeader>
            <StyledSlidersContainer>
                <Slider
                    min={10000}
                    max={1000000}
                    step={10000}
                    displayValue={numeral(soldItems).format("0a")}
                    setValue={setSoldItems}
                    label={t("calc-slider-label")}
                    dotsValues={["10k", "250k", "500k", "750k", "1m"]}
                    defaultValue={50000}
                />
                <Slider
                    min={1}
                    max={100}
                    step={1}
                    displayValue={`${price}$`}
                    setValue={setPrice}
                    label={t("calc-price")}
                    dotsValues={["1$", "25$", "50$", "75$", "100$"]}
                    defaultValue={56}
                />
            </StyledSlidersContainer>
            <Results soldItems={soldItems} price={price} />
            <StyledBackgroundImg src="/assets/percent.png" />
        </StyledCalculator>
    )
}

export default Calculator
