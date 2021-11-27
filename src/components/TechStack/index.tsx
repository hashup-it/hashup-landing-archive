import { ColoredText } from "../Shared"
import { techStackData } from "./data"
import { useTranslation } from "react-i18next"
import LogosContainer from "components/LogosContainer"

const TechStack = () => {
    const { t } = useTranslation()

    return (
        <LogosContainer
            data={techStackData}
            label={t("tech-stack.label")}
            header={
                <>
                    {t("tech-stack.header-1")}
                    <ColoredText> {t("tech-stack.header-2")}</ColoredText>
                </>
            }
        />
    )
}

export default TechStack
