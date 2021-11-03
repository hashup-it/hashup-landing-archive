import styled from "styled-components"
import { SectionHeader, SectionList } from "../Shared/sections.styles"
import { mediaQuery } from "../MediaQuery"

export const GameLibraryContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    margin-top: 0px;
    margin-bottom: 0px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${mediaQuery.laptop} {
        flex-direction: column;
    }
`

export const GameLibraryHeader = styled(SectionHeader)`
    width: 12em;
`

export const NicknameInstructions = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: flex-start;
`

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;

    ${mediaQuery.laptop} {
        align-items: center;
    }
`

export const NicknameInstructionsHeading = styled.span`
    color: white;
    padding: 0;
    margin-top: 45px;
    margin-bottom: 33px;
`

export const NicknameInstructionsList = styled(SectionList)``
