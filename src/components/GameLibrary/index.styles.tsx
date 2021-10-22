import styled from 'styled-components'
import { SectionHeader } from '../Shared/sections.styles'
import { mediaQuery } from '../MediaQuery'

export const GameLibraryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 300px;
    margin-bottom: 90px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${mediaQuery.laptop} {
        flex-direction: column;
        backogrund-color: red;
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

`;

export const NicknameInstructionsHeading = styled.span`
    color: white;
    padding: 0;
    
    margin-bottom: 33px;
`

export const NicknameInstructionsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 14px;
    
    padding: 0;
    margin: 0;

    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;

    color: #CDCDCD;

    li {
        padding-left: 19px;
    }
    
    li::marker {
        content: url('/assets/icons/list-marker.svg');
        width: 6px;
        height: 6px;
    }

    
`
