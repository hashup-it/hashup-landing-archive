import styled from 'styled-components'
import { ComparisonItemContent } from '../../Comparison/index.styles'
import { StyledSocialMedia } from '../../Header/HeaderBottom/index.styles'
import { Swatches } from '../../../__styles__/Swatches'

export const PersonContainer = styled.div`
    display: flex;
    position: relative;

    width: 18em;
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 120px;

    position: absolute;
    top: -60px;
    right: 40px;
`

export const PersonDescription = styled.div<({ outline: boolean | undefined })>`
    background: ${props => props.outline ? `linear-gradient(${Swatches.primary_color}, transparent)` : 'auto'};
    padding: 1px;
    border-radius: 40px;
    position: relative;

    margin-top: 2rem;
`

export const PersonDescriptionContent = styled(ComparisonItemContent)`
    padding: 60px 32px;
`

export const Function = styled.div`
    font-family: Sora;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;

    margin-bottom: 6px;
    margin-top: 10px;
`

export const Name = styled.div`
    font-family: Sora;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;

    margin-bottom: 24px;
`

export const Description = styled.div`
    font-family: Sora;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;

    color: #B7B7B7;
`

export const Separator = styled.div`
    background: url('/assets/icons/separator.svg');
    width: 25px;
    height: 2px;
    margin: 30px 0;
`

export const SocialMedia = styled(StyledSocialMedia)`
    justify-content: start;
`


