import styled from 'styled-components'
import { mediaQuery } from '../MediaQuery'

export const LandingHeaderContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    position: relative;

    ${mediaQuery.laptop} {
        grid-template-columns: auto;
        margin-top: 180px;
        height: auto;
    }

    ${mediaQuery.mobileM} {
        padding: 10px;
    }
`

export const CartridgeContainer = styled.div`
`
