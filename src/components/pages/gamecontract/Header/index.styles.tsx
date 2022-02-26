import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledButtons = styled.div`
    margin-top: 45px;
    display: flex;
    align-items: center;

    ${MediaQuery.tablet} {
        flex-direction: column;
        gap: 30px;
        margin-top: 70px;
    }
`

export const StyledBackground = styled.div`
    div.laptop-img {
        opacity: 0.7;
        margin: auto;
        position: absolute;
        top: 10%;
        width: 1200px;
        left: 25%;

        ${MediaQuery.tablet} {
            opacity: 0.5;
            top: 20%;
            left: 0;
            width: 120%;
        }
    }

    div.red-dots {
        width: 500px;
        position: absolute;
        bottom: 20%;
        right: 14%;

        ${MediaQuery.laptop} {
            bottom: 25%;
            right: -20%;
            opacity: 0.8;
        }

        ${MediaQuery.tablet} {
            opacity: 0.4;
            right: -35%;
            top: 55%;
        }

        ${MediaQuery.mobileL} {
            top: 42%;
            left: 38%;
            width: 300px;
        }
    }

    div.dark-flare {
        width: 500px;
        height: 700px;
        background-color: black;
        position: absolute;
        top: 10%;
        left: 20%;
        border-top-right-radius: 100%;
        border-bottom-right-radius: 100%;
        filter: blur(500px);
        z-index: 1;

        ${MediaQuery.laptop} {
            top: 10%;
        }

        ${MediaQuery.tablet} {
            height: 450px;
            width: 200px;
            top: 20%;
            left: 5%;
        }
    }
`
