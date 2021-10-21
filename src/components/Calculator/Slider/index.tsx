import { FunctionComponent } from "react";
import { StyledSlider, StyledSliderInput, StyledSliderLabel } from "./index.styles";

interface SliderProps {
    label: string,

}
 
const Slider: FunctionComponent<SliderProps> = ({
    label
}) => {
    return (  
        <StyledSlider>
            <StyledSliderLabel>
                {label}
            </StyledSliderLabel>
            <StyledSliderInput
                type="range"
            />
        </StyledSlider>
    );
}
 
export default Slider;