import styled from "styled-components"
import { Swatches } from "__styles__/consts"

export const StyledBrandMaterialsWrapper = styled.div`
    margin-top: 120px;
`

export const StyledMaterialsList = styled.div`
    display: flex;
    gap: 35px;
    margin-top: 75px;
`

export const StyledMaterialItemBox = styled.div`
    width: 310px;

    div.img-box {
        width: 100%;
        height: 118px;
        background-color: black;
        padding: 8px;
        box-sizing: border-box;
        border: 1px solid #3b3d40;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3.label {
        font-size: 22px;
        margin-top: 55px;
    }

    div.description-box {
        font-size: 16px;
        line-height: 160%;
        margin-top: 25px;
        margin-bottom: 30px;
        color: #cdcdcd;

        a {
            color: ${Swatches.primary_color};
            font-weight: 600;

            :hover {
                opacity: 0.8;
            }
        }
    }

    div.button-box {
        width: 200px;
    }
`

export const StyledImg1Wrapper = styled.div`
    width: 180px;
`

export const StyledImg2Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`
