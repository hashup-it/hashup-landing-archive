import styled from "styled-components";
import { Swatches } from "../Swatches";

export const StyledAboutUs = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 10vh;
`;

export const BackgroundWorld = styled.div`
    position: absolute;
    background-image: url('/assets/background-world.png');
    width: 100vw;
    height: 200vh;
    background-size: 80vw;
    background-repeat: no-repeat;
    top: -50vh;
    left: 0;
    pointer-events: none;
    z-index: -1;
`;

export const RadialGradient = styled.div`
    position: absolute;
    background: #C4C4C4;
    opacity: 0.2;
    filter: blur(122px);
    border-radius: 326px;
    width: 250px;
    height: 250px;
    top: -10vh;
    right: 5vw;
    pointer-events: none;
    z-index: -1;
`;

export const Cards = styled.div`
    display: flex;
    gap: 20px;
`;

export const AboutCard = styled.div`
    background: linear-gradient(180deg, #010101 0%, rgba(1, 1, 1, 0) 100%);
    z-index: 9990;
    width: 210px;
    padding: 43px;
    color: ${Swatches.text_secondary};
    height: 210px;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 180%;
    border-radius: 40px;
    position: relative;

    :nth-child(2) {
        margin-top: 80px;
    }
`;

export const CardHeader = styled.h3`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140%;
    color: white;
`;

export const CardLine = styled.div`
    width: 25px;
    height: 2px;
    background: ${Swatches.primary_color};
    margin-top: 20px;
`;

export const CardParticles = styled.div`
    position: absolute;
    background: url('/assets/card-particles.png');
    width : 300px;
    height :300px;
    background-repeat: none;
    top: -40px;
    right: -40px;
    pointer-events: none;
    z-index: -1;
`;