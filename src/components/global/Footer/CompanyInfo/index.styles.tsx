import { MediaQuery } from "__styles__/consts"
import styled from "styled-components"
import { Swatches } from "__styles__/consts"

export const StyledCompanyInfo = styled.div`
    font-size: 13px;
    color: ${Swatches.text_secondary};
    line-height: 22px;
`

export const StyledCompanyIds = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 180%;
    display: flex;
    align-items: center;
    color: #6d6d6d;

    ${MediaQuery.tablet} {
        justify-content: center;
    }
`

export const StyledMailLink = styled.a`
    color: white;
    text-decoration: none;
`

export const StyledContactField = styled.div`
    font-style: normal;
    font-size: 14px;
    line-height: 180%;
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 19px;
    margin-bottom: 7.2px;
`

export const StyledAddressLineEmphasized = styled.div`
    display: inline-block;
    font-weight: 600;
`
