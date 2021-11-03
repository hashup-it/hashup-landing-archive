import { FC, useEffect, useMemo, useRef } from "react"
import {
    StyledSlider,
    StyledSliderWrapper,
    StyledSliderLabel,
    DISPLAY_VALUE_ATTRIBUTE,
} from "./index.styles"
import RcSlider from "rc-slider"
import "rc-slider/assets/index.css"

interface SliderProps {
    readonly label: string
    readonly displayValue: string
    readonly max: number
    readonly min: number
    readonly step: number
    readonly dotsValues: string[]
    readonly defaultValue: number
    readonly setValue: (val: number) => void
}

const Slider: FC<SliderProps> = ({
    min,
    max,
    step,
    label,
    setValue,
    displayValue,
    dotsValues,
    defaultValue,
}) => {
    const sliderRef = useRef<HTMLDivElement>(null)
    const sliderHandle = useMemo(() => {
        if (sliderRef.current) {
            return sliderRef.current.querySelector(".rc-slider-handle")
        }
    }, [sliderRef])

    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue, setValue])

    useEffect(() => {
        if (sliderHandle) {
            // Update value shown over slider-handler
            // It's a little bit hacky because rc-slider doesn't
            // have any API to write custom value over slider-handler,
            // so we have to manipulate DOM directly (to use HTML attribute)
            sliderHandle.setAttribute(DISPLAY_VALUE_ATTRIBUTE, displayValue)
        }
    }, [sliderRef, displayValue, sliderHandle])

    return (
        <StyledSlider>
            <StyledSliderLabel>{label}</StyledSliderLabel>
            <StyledSliderWrapper ref={sliderRef} dotsValues={dotsValues}>
                <RcSlider
                    defaultValue={defaultValue}
                    min={min}
                    max={max}
                    step={step}
                    onChange={setValue}
                    dots
                />
            </StyledSliderWrapper>
        </StyledSlider>
    )
}

export default Slider
