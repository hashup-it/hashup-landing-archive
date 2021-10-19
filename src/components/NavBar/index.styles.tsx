import styled from "styled-components";
import { Swatches } from "../Swatches";

export const StyledNavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: grid;
    padding: 40px;
    grid-template-columns: 1fr auto 1fr;
    font-size: 16px;
    color: ${Swatches.text_main};
    font-weight: 700;
    cursor: pointer;
    align-items: flex-start;
    z-index: 999;
    background-color: rgba(0,0,0,0.8);
`;

export const Logo = styled.img`
    cursor: pointer;
    margin-top: -9px;
`;

export const ButtonsMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 60px;
`;

export const Icon = styled.img`
    padding-top: 6px;
    padding-left: 9px;
`;

