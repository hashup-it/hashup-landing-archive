import GenericContent from "components/shared/Header/GenericContent"
import FullScreenHeader from "components/shared/Header/FullScreenHeader"
import VideoBackground from "components/shared/Header/VideoBackground"
import ImgBackground from "components/shared/Header/ImgBackground"
import { Trans, useTranslation } from "react-i18next"
import { StyledButtons } from "./index.styles"
import { StyledButton2 } from "components/shared/buttons.styles"
import { ArrowButton } from "components/shared/ArrowButton"
import BottomNav from "components/shared/Header/BottomNav"

import bgImg from "/public/assets/home/header/cartridge.png"

const Header = () => {
    const { t } = useTranslation()

    return (
        <FullScreenHeader
            desktopBackground={
                <VideoBackground src="https://cdn.hashup.it/landing/Hashup_web.mp4" opacity={0.5} />
            }
            mobileBackground={<ImgBackground src={bgImg} alt="Cartridge" />}
            extraContent={<BottomNav />}
        >
            <GenericContent
                label={<Trans i18nKey="gamecontract.header.label" />}
                title={<Trans i18nKey="gamecontract.header.title" />}
                paragraph={<Trans i18nKey="gamecontract.header.paragraph" />}
            >
                <StyledButtons>
                    <StyledButton2>{t("gamecontract.header.button-1")}</StyledButton2>
                    <ArrowButton title="FAQ" label={t("gamecontract.header.button-2")} />
                </StyledButtons>
            </GenericContent>
        </FullScreenHeader>
    )
}

export default Header
