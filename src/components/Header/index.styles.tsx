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
        margin-top: 60px;
        height: auto;
        
        > :first-child {
            margin-top: 122px;
            z-index: 2;
        }

        > :nth-child(2) {
            height: 40vh;
            z-index: 2;
        }

        
    }

    ${mediaQuery.mobileM} {
        padding: 10px;
    }
`

export const CartirdgeContainer = styled.div``
