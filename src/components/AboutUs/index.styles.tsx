import styled from "styled-components";
import { Swatches } from "../Swatches";

export const StyledAboutUs = styled.div`
    position: relative;
    z-index: 0;
`;

export const BackgroundWorld = styled.div`
    position: absolute;
    background-image: url('/assets/background-world.png');
    width: 100vw;
    height: 200vh;
    background-repeat: no-repeat;
    top: -50vh;
    left: 0;
    pointer-events: none;
    z-index: -1;
`;

export const RadialGradient = styled.div`
    position: absolute;
    background: radial-gradient(50% 50% at 50% 50%, rgba(255,0,0,0.2) 0%, rgba(196, 196, 196, 0) 100%);
    border-radius: 326px;
    width: 100vw;
    height: 100vh;
    top: -40vh;
    left: 0;
    pointer-events: none;
    z-index: -1;
`;

export const Cards = styled.div`
    display: flex;
    gap: 20px;
`;

export const AboutCard = styled.div`
    background: black;
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
`;