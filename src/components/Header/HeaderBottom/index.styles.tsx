import styled from 'styled-components'
import { Swatches } from '__styles__/Swatches'

export const StyledHeaderBottom = styled.div`
    position: absolute;
    bottom: 0;
    height: 80px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledScrollDown = styled.div`

    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    color: #545454;

    display: flex;
    align-items: center;
`

export const StyledMouseIcon = styled.img`
    margin-right: 13px;
`

export const StyledBottomGroup = styled.div`
    display: flex;
    gap: 35px;
`

export const StyledTokenInfo = styled.div`
    display: flex;
    gap: 44px;
    align-items: center;
`

export const StyledSocialMedia = styled.div`

    display: flex;
    justify-content: center;
    gap: 26px;
`

export const SocialIcon = styled.img`
    cursor: pointer;
`

export const StyledLine = styled.div`
    border: 1px solid ${Swatches.primary_color};
    height: 17px;
`

export const StyledTokenInfoItem = styled.div`
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    gap: 7px;
`

export const StyledTokenIcon = styled.div<({ icon: string })>`
    width: 15px;
    height: 15px;
    background: url(${props => props.icon});
    cursor: pointer;
    position: relative;
    background-position: center;
    background-size: 15px;
    background-repeat: no-repeat;

    :hover {
        > span {
            display: flex;
        }
    }
`

export const StyledCopyGroup = styled.div`
    display: flex;
    align-items: center;
    gap: inherit;
    cursor: pointer;
    position: relative;

    :hover {
        > span {
            display: flex;
        }

        > div > span {
            display: flex;
        }
    }
`


export const Tooltip = styled.span`
    display: none;
    position: absolute;
    top: -40px;
    background-color: red;
    white-space: nowrap;
    left: 50%;
    font-size: 10px;
    margin: auto;
    padding: 6px;

    transform: translateX(-50%);

    justify-content: center;
    border-radius: 6px;
    background-color: #222;
`