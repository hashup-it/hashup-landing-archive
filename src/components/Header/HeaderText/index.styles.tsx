import styled from "styled-components";
import { mediaQuery } from "../../MediaQuery";
import { Swatches } from "../../Swatches";

export const StyledHeaderText = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-left: 100px;
   gap: 40px;

   ${mediaQuery.laptop} {

       padding-left: 0px;
       padding: 0 10vw 0 10vw;
   }


   ${mediaQuery.mobileL} {
       padding-left: 0px;
       padding: 0 0 0 0;
   }
`;

export const Header = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 115%;
    padding: 0;
    margin: 0;
    ${mediaQuery.laptop} {
       font-size: 50px;
   }
`;

export const GradientText = styled.span`
    background: linear-gradient(90deg, #000000 0%, rgba(255, 0, 0, 0.5) 100%);
    padding-right: 10px;
`;

export const SmallText = styled.p`
    color: ${Swatches.text_secondary};
    padding: 0;
    margin: 0;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 20px;
    ${mediaQuery.tablet} {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto atuo;
    }
`;

export const HeaderAirdropWrapper = styled.div`
    display: flex;
    justify-content: flex-start;

    ${mediaQuery.tablet} {
        display: grid;
        justify-content: initial;
    }

    cursor: pointer;
    :hover {
        opacity: 0.9;
    }
   

`;

export const HeaderAirdropIcon = styled.div`
    background-color: #FFFFFF;
    border-radius: 15px 0px 0px 15px; 
    background-image: url('/assets/icons/bolt.svg');
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1;

    ${mediaQuery.tablet} {
        display: none;
    }
`;

export const HeaderGetAirdrop = styled.div`
    background-color: ${Swatches.primary_color};
    border-radius: 0px 15px 15px 0px;  
    padding: 16px;
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    white-space: nowrap;

    ${mediaQuery.tablet} {
        text-align: center;
        border-radius: 15px;
    }
`;
