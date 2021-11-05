import styled from "styled-components"

export const NewsletterContainer = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 12px;
    line-height: 160%;

    color: white;

    gap: 9px;
`

export const FormContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const StyledFormDescription = styled.div`
    margin-bottom: 10px;
`

export const StyledInput = styled.input`
    flex-grow: 0.75;

    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    padding: 16px;

    background: #ffffff;
    border: none;
    border-radius: 4px;

    outline: none;

    ::placeholder {
        color: #cdcdcd;
    }
`

export const StyledSignUpButton = styled.button`
    flex-grow: 0.25;

    background: #ff3f3f;
    border: none;

    filter: grayscale(100%);
    pointer: none;

    border-radius: 4px;

    color: white;
    font-family: Sora;
    font-style: normal;
    font-weight: 600;

    :hover {
        opacity: 1;
    }
`
