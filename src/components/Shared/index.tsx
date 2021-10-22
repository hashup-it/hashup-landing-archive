import styled from 'styled-components'
import { Swatches } from '../Swatches'

export const ColoredText = styled.span`
    color: ${Swatches.primary_color};
`

export const ButtonOutlined = styled.a`
    text-decoration: none;
    
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 15px;
    background: none;
    padding: 16px 32px 16px 32px;
    font-family: Sora;
    font-style: normal;
    color: ${Swatches.text_main};
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    :hover {
        background-color: white;
        color: ${Swatches.background_main};
    }
`

export const TestSpace = styled.div`
    height: 100vh;
`

export const GradientText = styled.span`
    background: linear-gradient(90deg, #000000 0%, rgba(255, 0, 0, 0.5) 100%);
`

export const BoldText = styled.span`
    font-weight: bold;
`;

export const StyledTopLine = styled.div`
    width: 266.12px;
    height: 4px;
    background: ${Swatches.primary_color};
`;


/* to delete */
export const StyledContainerOutline = styled.div<({outlineColor : string})>`
    position: absolute;
    width: 100%;
    height: 100%;
    height: 200px;
    width: 200px;
    border-radius: inherit;
    padding: 1px;
    z-index: 1;
    top: -1px;
    left: -1px;
    background: rgb(22,22,22);
    background: linear-gradient(90deg, rgba(22,22,22,1) 43%, ${props => props.outlineColor} 100%);
`;


export const AccentLongEmDash = styled.div`
    background: url('assets/icons/accented-long-em-dash.svg');
    height: 2px;
    width: 18px;
    margin: 0 1em;
`
