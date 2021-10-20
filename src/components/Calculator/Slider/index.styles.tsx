import styled from "styled-components";

const makeLongShadow = (color : string, size : string) => {
    let i = 18;
    let shadow = `${i}px 0 0 ${size} ${color}`;
  
    for (; i < 706; i++) {
      shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
    }
  
    return shadow;
  };

export const StyledSlider = styled.div`
    display: grid;
    grid-template-columns: 200px auto;
    gap: 20px;
    align-items: center;
`;

export const StyledSliderLabel = styled.span`
    font-size: 0.929rem;
    letter-spacing: 0.11rem;
    line-height: 120%;
    font-weight: normal;
    text-transform: uppercase;
    color: white;
`;

export const StyledSliderInput = styled.input`
    display: block;
    -webkit-appearance: none;
    background-color: transparent;
    height: 11px;
    width: 500px;

    &::-webkit-slider-runnable-track{
        background-color: #262228;
        border-radius: 35px;

    }

    &::-webkit-slider-thumb {
        position: relative;
        appearance: none;
        height: 11px;
        width: 7px;
        background: white;
        border-radius: 1px;
        border: 0;
        cursor: pointer;



        transform: translateY(-50%);
        transform: scale(3);

        box-shadow: ${makeLongShadow("red", "-10px")};
        transition: background-color 150ms;
    }
    
`;