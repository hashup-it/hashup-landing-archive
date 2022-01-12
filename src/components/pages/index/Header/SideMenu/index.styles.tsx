import styled from "styled-components"
import { MediaQuery } from "__styles__/consts"

export const StyledWrapper = styled.div`
    z-index: 99;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 50px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    a {
        padding: 10px;
        transition: opacity 120ms ease;

        :hover {
            transition: opacity 120ms ease;
            opacity: 0.8;
        }
    }
`
