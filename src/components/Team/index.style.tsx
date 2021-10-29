import styled from 'styled-components'
import { SectionHeader } from '../Shared/sections.styles'

export const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-bottom: 50vh;
`

export const Header = styled(SectionHeader)`
    margin-bottom: 80px;
`

export const CorePeopleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    margin-bottom: 80px;
`

export const TeamPeopleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;

    margin-bottom: 80px;
`

export const AdvisorsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;

    margin-bottom: 80px;
`
