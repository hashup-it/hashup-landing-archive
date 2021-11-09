import { Swatches } from "__styles__/Swatches"
import styled from "styled-components"
import { mediaQuery } from "components/MediaQuery"
import { useTranslation } from "react-i18next"

export const StyledWrapper = styled.div`
    padding: 150px 0;
    text-align: center;

    ${mediaQuery.tablet} {
        padding: 100px 0;
    }
`

export const StyledErrorText = styled.h1`
    font-size: 130px;
    color: ${Swatches.primary_color};

    ${mediaQuery.tablet} {
        font-size: 50px;
    }
`

export const StyledDescription = styled.h2`
    font-size: 30px;
    color: ${Swatches.text_main};

    ${mediaQuery.tablet} {
        font-size: 20px;
    }
`

const Page404 = () => {
    const { t } = useTranslation()

    return (
        <StyledWrapper>
            <StyledErrorText>404 :/</StyledErrorText>
            <StyledDescription>{t('error-404-description')}</StyledDescription>
        </StyledWrapper>
    )
}

export default Page404
