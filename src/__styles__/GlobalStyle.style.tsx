import { createGlobalStyle } from "styled-components"
import { Swatches } from "./Swatches"

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Sora', normal;
        font-display: auto;
        background-color: ${Swatches.background_main};
        overflow-x: hidden;
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
`
