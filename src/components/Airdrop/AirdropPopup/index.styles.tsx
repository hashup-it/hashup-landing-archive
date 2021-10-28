import styled from "styled-components";
import { hexToRGB } from "util/math";
import { Swatches } from "__styles__/Swatches";

export const StyledAirdropPopupWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    cursor: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 999;
`;

export const StyledPopupWindowWrapper = styled.div`
    background: linear-gradient(90deg, ${props => hexToRGB(Swatches.primary_color, 0)} 35%, ${props => Swatches.primary_color} 100%);
    padding: 1px;
    display: grid;
    border-radius: 13.0133px;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13.0133px;
`

export const StyledPopupWindow = styled.div`
    background: rgba(22, 22, 22, 1);
    border-radius: inherit;
    padding: 28px 36px;
    color: white;
    position: relative;
`;

export const StyledPopupHeader = styled.div`
    font-weight: normal;
    font-size: 30px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
`;

export const StyledPopupText = styled.p`
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    color: #CDCDCD;
`;

export const StyledTelegramContainer = styled.div`
    border-top: 1px solid #21242B;
    padding-top: 50px;
    padding-bottom: 25px;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    align-items: center;
    justify-content: flex-start;
`;

export const StyledTelegramHeader = styled.h4`
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
`;

export const StyledClose = styled.img`
    position: absolute;
    right: 21px;
    top: 21px;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`

export const StyledTelegramLink = styled.div`

    display: grid;
    gap: 20px;
    height: 45px;
    grid-template-columns: 45px auto;
    align-items: center;
`;

export const StyledTelegramIconWrapper = styled.div`
    background-color: red;
    height: 45px;
    border-radius: 50%;
    background: linear-gradient(180deg,#FF3F3F 0%, rgba(255, 63, 63, 0) 100%);
    opacity: 0.1;
`;

export const img = styled.div`
    
`;

export const StyledTelegramText = styled.div`
    font-weight: normal;
    font-size: 12px;
`;