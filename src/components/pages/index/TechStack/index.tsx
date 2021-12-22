import { StyledColoredText } from "components/shared/utils.styles"
import { techStackData } from "./data"
import { useTranslation } from "react-i18next"
import LogosContainer from "components/pages/index/LogosContainer"

const TechStack = () => {
    const { t } = useTranslation()

    return (
        <LogosContainer
            data={techStackData}
            label={t("tech-stack.label")}
            header={
                <>
                    {t("tech-stack.header-1")}
                    <StyledColoredText> {t("tech-stack.header-2")}</StyledColoredText>
                </>
            }
        />
    )
}

export default TechStack
