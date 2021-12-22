import { StyledColoredText } from "components/shared/utils.styles"
import { partnersData } from "./data"
import { useTranslation } from "react-i18next"
import LogosContainer from "components/pages/index/LogosContainer"

const TechStack = () => {
    const { t } = useTranslation()

    return (
        <LogosContainer
            data={partnersData}
            label={t("partners.label")}
            header={
                <>
                    {t("partners.header-our")}
                    <StyledColoredText>{t("partners.header-partners")}</StyledColoredText>
                </>
            }
        />
    )
}

export default TechStack
