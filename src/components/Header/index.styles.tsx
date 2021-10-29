import styled from 'styled-components'
import { mediaQuery } from '../MediaQuery'

export const LandingHeaderContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    position: relative;

    ${mediaQuery.laptop} {
        height: auto;
        margin-top: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ${mediaQuery.mobileL} {
        margin-top: 120px;
    }

    ${mediaQuery.mobileM} {
        padding: 10px;
    }
`

export const CartridgeContainer = styled.div`
    display: flex;
    z-index: 2;

    ${mediaQuery.laptop} {
        height: 50vh;
        width: 50vw;
        margin-bottom: 2em;
    }

    ${mediaQuery.tablet} {
        height: 50vw;
        width: 80vw;
        
        margin-bottom: 0;
    }

    ${mediaQuery.mobileL} {
        height: 50vh;
    }
`
