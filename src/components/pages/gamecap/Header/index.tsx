import GenericContent from "components/shared/Header/GenericContent"
import FullScreenHeader from "components/shared/Header/FullScreenHeader"
import { Trans, useTranslation } from "react-i18next"
import { StyledButtons } from "./index.styles"
import BottomNav from "components/shared/Header/BottomNav"
import { StyledButton2 } from "components/shared/buttons.styles"
import { ArrowButton } from "components/shared/ArrowButton"

const Header = () => {
    const { t } = useTranslation()
    return (
        <FullScreenHeader
            mobileBackground={<div></div>}
            desktopBackground={<div></div>}
            extraContent={<BottomNav />}
            topFlare
        >
            <GenericContent
                label={<Trans i18nKey="gamecap.header.label" />}
                title={<Trans i18nKey="gamecap.header.title" />}
                paragraph={<Trans i18nKey="gamecap.header.paragraph" />}
            >
                <StyledButtons>
                    <a href="#how-it-works">
                        <StyledButton2>{t("gamecap.header.button-1")}</StyledButton2>
                    </a>
                    {/* <a href="#faq">
                        <ArrowButton title="FAQ" label={t("gamecap.header.button-2")} />
                    </a> */}
                </StyledButtons>
            </GenericContent>
        </FullScreenHeader>
    )
}

export default Header
