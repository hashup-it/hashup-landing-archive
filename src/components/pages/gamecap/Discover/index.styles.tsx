import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledItemsBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 45px;
    position: relative;
    z-index: 99;
    margin-top: 70px;

    ${MediaQuery.tablet} {
        flex-wrap: wrap;
    }
`

export const StyledFlare = styled.div`
    width: 550px;
    height: 650px;
    background-color: red;
    position: absolute;
    top: 13%;
    left: 20%;
    transform: rotate(-30deg);
    opacity: 0.08;
    border-radius: 100%;
    filter: blur(520px);
    z-index: 0;
`
