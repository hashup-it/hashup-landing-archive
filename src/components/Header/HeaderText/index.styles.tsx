import styled from "styled-components";
import { Swatches } from "../../Swatches";

export const StyledHeaderText = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-left: 100px;
   gap: 40px;
`;

export const Header = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 115%;
    padding: 0;
    margin: 0;
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
`;

export const HeaderAirdropWrapper = styled.div`
    display: flex;
`;

export const HeaderAirdropIcon = styled.div`
    background-color: #FFFFFF;
    border-radius: 15px 0px 0px 15px;   
    background-image: url('/assets/icons/bolt.svg');
    background-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 1;
`;

export const HeaderGetAirdrop = styled.div`
    
`;
