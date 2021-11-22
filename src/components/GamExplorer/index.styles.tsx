import styled from "styled-components"
import { SectionContainer } from "../Shared/sections.styles"
import { mediaQuery } from "components/MediaQuery"

export const StyledGamExplorer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`

export const StyledGameExplorerContainer = styled(SectionContainer)`
    display: flex;
    width: 30em;
    text-align: center;

    ${mediaQuery.laptop} {
        margin-bottom: 65px;
    }
`
