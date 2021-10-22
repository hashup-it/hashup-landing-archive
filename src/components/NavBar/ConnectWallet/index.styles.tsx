import styled from "styled-components";
import { mediaQuery } from "../../MediaQuery";

export const StyledConnectWallet = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-right: 10px;

`;

export const WalletHideWrapper = styled.div`
    ${mediaQuery.mobileM} {
        display: none;
    }
`;

export const WalletIcon = styled.img`

    margin-top: -3px;
`;
