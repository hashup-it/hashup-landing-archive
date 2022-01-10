import React, { useState } from "react"
import {
    FormContainer,
    NewsletterContainer,
    StyledFormDescription,
    StyledInputContainer,
} from "./index.styles"
import { StyledListHeader } from "../index.styles"
import { useTranslation } from "react-i18next"
import dynamic from "next/dynamic"
import LazyLoad from "react-lazyload"

const Form = dynamic(() => import("./Form"), { ssr: false })

const Newsletter = () => {
    const { t } = useTranslation()

    return (
        <NewsletterContainer>
            <StyledListHeader>{t("newsletter.header")}</StyledListHeader>
            <StyledFormDescription>{t("newsletter.description")}</StyledFormDescription>
            <FormContainer>
                <StyledInputContainer>
                    <LazyLoad offset={300} once>
                        <Form />
                    </LazyLoad>
                </StyledInputContainer>
            </FormContainer>
        </NewsletterContainer>
    )
}

export default Newsletter
