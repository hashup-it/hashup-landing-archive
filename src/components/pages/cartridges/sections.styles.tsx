import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"
import { assetsUrl } from "config"

export const SectionContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr;
    gap: 200px;
    margin-bottom: 180px;

    ${MediaQuery.laptop} {
        gap: 100px;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        gap: 50px;
        margin-bottom: 100px;
    }
`

export const SmallHeaderText = styled.p`
    color: ${Swatches.text_secondary};
    line-height: 160%;
    padding: 0;
    margin: 0;
`

export const SectionText = styled.p`
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    color: ${Swatches.text_secondary};
    margin-bottom: 50px;
`
