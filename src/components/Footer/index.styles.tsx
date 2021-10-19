import styled from "styled-components";
import { Swatches } from "../Swatches";

export const StyledFooter = styled.div`
    display: grid;
    grid-template-rows: auto auto;
`;

export const FooterTop = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    gap: 20px;
    padding-bottom: 50px;
`;

export const FooterTopLeft = styled.div`
        font-size: 13px;
        color: ${Swatches.text_secondary};
        line-height: 22px;
`;

export const FooterBottom = styled.div`
    padding: 32px 0px 32px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Copyright = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #969DB2;
`;

export const FooterBottomGroup = styled.div`
    align-items: center;
    display: flex;
`;

export const FooterLink = styled.div`
    color: #969DB2;
    margin-left: 40px;
    font-weight: normal;
    font-size: 17px;
    cursor: pointer;
    opacity: 0.4;

    :hover {
        opacity: 1;
    }
`;

export const FooterMenu = styled.div`
    display: grid;
    grid-template-rows: auto auto;
`;

export const MenuLabel = styled.span`
    color: ${Swatches.primary_color};
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 12px;
    line-height: 45px;
    display: flex;
    align-items: center;
    gap: 13px;
`;

export const ColoredLine = styled.div`
    background: ${Swatches.primary_color};
    opacity: 0.2;
    width: 125px;
    height: 1px;
`;

export const MenuItems = styled.nav`
    display: flex;
    gap: 20px;
`;

export const MenuList = styled.ul`

    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    margin: 0;
    list-style-type: none;
    padding: 0;
    color: #8A8F98;
    font-weight: normal;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const MenuItem = styled.li`
    line-height: 160%;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }

`;

export const Icons = styled.div`
    
    display: flex;
    gap: 15px;
`;

export const Icon = styled.div<({url: string})>`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: 0.635381px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;


    background: url(${props => "/assets/icons/" + props.url});
    background-repeat: no-repeat;
    background-position: center;

    :hover {
        border-color: white;
    }
`;


export const Logo = styled.img`
    cursor: pointer;

`;