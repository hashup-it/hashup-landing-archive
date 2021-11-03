import { mediaQuery } from "components/MediaQuery"
import styled from "styled-components"
import { SectionHeader } from "../Shared/sections.styles"

export const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 0px;
`

export const Header = styled(SectionHeader)`
    margin-bottom: 80px;
`

export const CorePeopleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 80px;

    ${mediaQuery.laptop} {
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }
`

export const TeamPeopleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin-bottom: 80px;
    overflow-x: auto;
    padding-top: 40px;
`

export const AdvisorsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    margin-bottom: 80px;
    padding-top: 40px;

    overflow-x: auto;
`
