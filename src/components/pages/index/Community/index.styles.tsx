import { assetsUrl } from "config"
import styled from "styled-components"
import { MediaQuery, Swatches } from "__styles__/consts"

export const StyledSection = styled.div`
    margin: 150px auto -50px;
    width: 100%;
    position: relative;
    z-index: 99;

    h1 {
        text-align: left;
        font-weight: 700;
        font-size: 50px;
        width: auto;

        ${MediaQuery.tablet} {
            text-align: center;
            font-size: 40px;
        }
    }

    p {
        font-weight: 500;
        margin-top: 30px;
        line-height: 160%;
        font-size: 24px;

        ${MediaQuery.tablet} {
            text-align: center;
            font-size: 18px;
        }
    }
`
export const StyledSocialArea = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 70px;
    gap: 20px;

    ${MediaQuery.laptop} {
        gap: 12px;
        flex-wrap: wrap;
    }
`

// export const StyledSocialBoxA = styled.a`
//     display: block;
//     width: 285px;
//     box-sizing: border-box;
//     border: 1px solid ${Swatches.primary_color};
//     border-radius: 4px;
//     padding: 20px 24px;
//     position: relative;

//     ${MediaQuery.tablet} {
//         padding: 16px 20px;
//     }

//     :hover {
//         :after {
//             transform: translateX(8px);
//             transition: transform 150ms ease;
//         }
//     }

//     :after {
//         content: "";
//         position: absolute;
//         display: block;
//         width: 30px;
//         height: 30px;
//         right: 25px;
//         top: calc(50% - 8px);
//         background-image: url(${() => assetsUrl("community/arrow.svg")});
//         background-position: center;
//         background-repeat: no-repeat;
//         background-size: 100%;
//         transition: transform 100ms ease;
//     }

//     div.icon-wrapper {
//         width: 25px;
//         height: 30px;

//         img {
//             width: 100%;
//         }
//     }

//     div.label {
//         width: 100%;
//         position: relative;
//         font-size: 24px;
//         font-weight: 600;
//         margin-top: 18px;
//     }

//     div.small-label {
//         font-weight: 600;
//         font-size: 14px;
//         margin-top: 10px;
//         color: #5a5e68;
//     }
// `
