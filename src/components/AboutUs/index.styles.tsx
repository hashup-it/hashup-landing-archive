import styled from 'styled-components'
import { mediaQuery } from '../MediaQuery'
import { Swatches } from '../../__styles__/Swatches'

export const StyledAboutUs = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 10vh;
`

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr;
    gap: 200px;
    margin-bottom: 100px;

    ${mediaQuery.laptopL} {
        gap: 50px;
        grid-template-columns: 2.5fr 3fr;
    }

    ${mediaQuery.tablet} {
        gap: 0px;
        margin-bottom: 0px
    }

    ${mediaQuery.laptop} {

        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }


`

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
`

export const RadialGradient = styled.div`
    position: absolute;
    background: #C4C4C4;
    opacity: 0.2;
    filter: blur(122px);
    border-radius: 326px;
    width: 250px;
    height: 250px;
    top: -10vh;
    right: -5vw;
    pointer-events: none;
    z-index: -1;
`

export const Cards = styled.div`
    display: flex;
    gap: 20px;
    position: relative;

    ${mediaQuery.laptopL} {
        justify-content: center;
        gap: 10px;
    }

    ${mediaQuery.tablet} {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

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

    ${mediaQuery.laptopL} {
        padding: 20px;
        border-radius: 20px;
    }

    ${mediaQuery.tablet} {
        padding: 43px;
        border-radius: 20px;
    }

    :nth-child(2) {
        margin-top: 80px;

        ${mediaQuery.tablet} {
            margin-top: 0px;
        }
    }
`

export const CardHeader = styled.h3`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140%;
    color: white;
`

export const CardLine = styled.div`
    width: 25px;
    height: 2px;
    background: ${Swatches.primary_color};
    margin-top: 20px;
`

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
`
