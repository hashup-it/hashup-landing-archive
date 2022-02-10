import BlockButton from "components/shared/BlockButton"
import { Documents, Languages } from "config"
import { useTranslation } from "react-i18next"
import { getWhitepaper } from "util/whitepaper"
import { StyledButtonsBox } from "./index.styles"

const Buttons = () => {
    const { t } = useTranslation()

    return (
        <StyledButtonsBox>
            <BlockButton
                link={{ href: "siema", title: "Calendly" }}
                button={{ label: t("vccard.buttons.0.label"), title: t("vccard.buttons.0.title") }}
                isFilled
            />
            <BlockButton
                link={{ href: Documents.pitchdeck, title: "Pitchdeck HashUp" }}
                button={{ label: t("vccard.buttons.1.label"), title: t("vccard.buttons.1.title") }}
            />
            <BlockButton
                link={{ href: getWhitepaper(Languages.en.code), title: "Whitepaper HashUp" }}
                button={{ label: t("vccard.buttons.2.label"), title: t("vccard.buttons.2.title") }}
            />
        </StyledButtonsBox>
    )
}

export default Buttons
