import styled, { css } from "styled-components"
import { Swatches } from "__styles__/consts"

export const StyledLeadershipWrapper = styled.div`
    margin-top: 150px;
`

export const StyledTextBox = styled.div<{ reversedLayout?: boolean }>`
    flex: 1;
    font-weight: 600;

    ${p =>
        p.reversedLayout
            ? css`
                  padding-right: 95px;
              `
            : css`
                  padding-left: 95px;
              `}

    div.header {
        div.role {
            color: ${Swatches.primary_color};
            font-size: 13px;
        }

        div.name {
            font-size: 24px;
            margin-top: 12px;
        }
    }

    p.text {
        margin-top: 45px;
        column-count: 2;
        column-gap: 75px;
        text-align: justify;
        font-size: 16px;
        line-height: 200%;
        color: #b7b7b7;
        width: 800px;
    }
`

export const StyledLeaderSection = styled.div<{ reversedLayout?: boolean }>`
    margin-top: 85px;
    display: flex;
    flex-direction: ${p => (p.reversedLayout ? "row-reverse" : "row")};
`

export const StyledImgBox = styled.div`
    width: 300px;

    div.img-wrapper {
        margin-bottom: 30px;
    }
`
