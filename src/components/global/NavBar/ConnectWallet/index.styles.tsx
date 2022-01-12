import styled from "styled-components"

export const StyledWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-right: 10px;
    cursor: pointer;
    transition: opacity 100ms ease;
    background-color: transparent;
    color: white;
    font-size: 16px;
    font-weight: 600;

    :hover {
        transition: opacity 100ms ease;
        opacity: 0.8;
    }

    div.icon-wrapper {
        margin-bottom: -5px;
    }
`

export const StyledAddress = styled.div`
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
`
