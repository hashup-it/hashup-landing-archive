import { createGlobalStyle } from "styled-components"
import { Swatches } from "./consts"

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Sora', normal;
        font-display: auto;
        background-color: ${Swatches.background_main};
        overflow-x: hidden;
    }

    * {
        font-family: 'Sora', normal !important;
    }

    a {
        text-decoration: none;
        color: white;
    }

    button {
        border: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    ul {
        padding: 0;
    }
`
