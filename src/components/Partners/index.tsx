import { ColoredText } from "../Shared"
import { partnersData } from "./data"
import { useTranslation } from "react-i18next"
import LogosContainer from "components/LogosContainer"

const TechStack = () => {
    const { t } = useTranslation()

    return (
        <LogosContainer
            data={partnersData}
            label={t("partners.label")}
            header={
                <>
                    {t("partners.header-our")}
                    <ColoredText>{t("partners.header-partners")}</ColoredText>
                </>
            }
        />
    )
}

export default TechStack
