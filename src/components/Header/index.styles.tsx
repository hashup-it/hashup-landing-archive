import styled from 'styled-components'
import { mediaQuery } from '../MediaQuery'

export const LandingHeaderContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    position: relative;
    
    ${mediaQuery.laptop} {
        grid-template-columns: unset;
        
        height: auto;
        
        > :first-child {
            margin-top: 122px;
            z-index: 2;
        }

        > :nth-child(2) {
            margin-top: -100px;
            height: 100vh;
        }
    }
`

export const CartirdgeContainer = styled.div``
