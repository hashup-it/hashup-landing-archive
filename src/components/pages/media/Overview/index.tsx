import { Trans, useTranslation } from "react-i18next"
import { StyledTitle } from "../shared"
import { StyledOverviewWrapper, StyledTextSection } from "./index.styles"

const Overview = () => {
    const { t } = useTranslation()
    return (
        <StyledOverviewWrapper>
            <StyledTitle>{t("media.overview.section-title")}</StyledTitle>
            <StyledTextSection>
                <h2>{t("media.overview.title1")}</h2>
                <p>
                    <Trans i18nKey={"media.overview.paragraph1"} />
                </p>
                <h2>{t("media.overview.title2")}</h2>
                <p>
                    <Trans i18nKey={"media.overview.paragraph2"} />
                </p>
            </StyledTextSection>
        </StyledOverviewWrapper>
    )
}

export default Overview
