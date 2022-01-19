import { createGlobalStyle } from "styled-components"
import { Swatches } from "./consts"

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-display: optional;
        font-family: 'Sora', normal;
        background-color: ${Swatches.background_main};
        overflow-x: hidden;

        // Custom scrollbar styles
        ::-webkit-scrollbar {
            width: 10px;
            background-color: #222;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #eee;
            cursor: pointer;
            border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #fff;
        }
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
