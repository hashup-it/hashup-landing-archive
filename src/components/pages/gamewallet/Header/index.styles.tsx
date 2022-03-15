import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledBackground = styled.div`
    div.tablet-img {
        opacity: 0.9;
        margin: auto;
        position: absolute;
        top: 10%;
        width: 900px;
        left: 25%;
        z-index: 1;

        ${MediaQuery.laptopL} {
            left: 6%;
        }

        ${MediaQuery.tablet} {
            opacity: 0.5;
            top: 20%;
            left: 0;
            width: 120%;
        }
    }

    div.phone-img {
        position: absolute;
        width: 400px;
        left: 60%;
        top: 40%;
        z-index: 4;
        opacity: 0.8;

        ${MediaQuery.laptop} {
            display: none;
        }
    }

    div.red-dots {
        width: 600px;
        position: absolute;
        top: 20%;
        right: 10%;
        z-index: 4;
        opacity: 0.9;

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

    div.red-flare {
        position: absolute;
        width: 300px;
        height: 300px;
        background-color: red;
        z-index: 3;
        right: 22%;
        top: 30%;
        filter: blur(500px);
        border-radius: 100%;
        opacity: 0.1;
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
        z-index: 2;

        ${MediaQuery.laptopL} {
            left: 4%;
        }

        ${MediaQuery.laptop} {
            top: 10%;
        }

        ${MediaQuery.tablet} {
            height: 450px;
            width: 200px;
            top: 20%;
            left: 0%;
        }
    }
`

export const StyledInfoBox = styled.div`
    padding: 12px;
    background-color: ${Swatches.primary_color};
    width: 250px;
    text-align: center;
    position: relative;
    border-radius: 5px;
    margin-top: 25px;
    font-weight: 600;
`
