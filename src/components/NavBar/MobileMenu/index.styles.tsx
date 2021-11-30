import styled from "styled-components"
import { Swatches } from "../../../__styles__/Swatches"

export const StyledMobileMenu = styled.div<{ opened: boolean }>`
    position: fixed;
    overflow-y: scroll;
    background-color: ${Swatches.background_main};
    height: 100vh;
    width: 100vw;
    z-index: -1;
    left: 0;
    top: 0;
    padding-top: 140px;
    transition: opacity 1s ease-in-out;
    opacity: ${props => (props.opened ? 1 : 0)};
`
