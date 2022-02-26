import GenericContent from "components/shared/Header/GenericContent"
import FullScreenHeader from "components/shared/Header/FullScreenHeader"
import { Trans, useTranslation } from "react-i18next"
import { StyledButtons, StyledBackground } from "./index.styles"
import { StyledButton2 } from "components/shared/buttons.styles"
import { ArrowButton } from "components/shared/ArrowButton"
import BottomNav from "components/shared/Header/BottomNav"
import Image from "next/image"

import laptopImg from "/public/assets/home/game-contract/laptop.png"
import redDotsImg from "/public/assets/home/game-contract/red-dots-2.png"

const Background = () => (
    <StyledBackground>
        <div className="laptop-img">
            <Image src={laptopImg} alt="GameContract preview" />
        </div>
        <div className="red-dots">
            <Image src={redDotsImg} alt="" quality={8} />
        </div>
        <div className="dark-flare" />
    </StyledBackground>
)

const Header = () => {
    const { t } = useTranslation()

    return (
        <FullScreenHeader
            desktopBackground={<Background />}
            mobileBackground={<Background />}
            extraContent={<BottomNav />}
            topFlare
        >
            <GenericContent
                label={<Trans i18nKey="gamecontract.header.label" />}
                title={<Trans i18nKey="gamecontract.header.title" />}
                paragraph={<Trans i18nKey="gamecontract.header.paragraph" />}
            >
                <StyledButtons>
                    <a href="#how-it-works">
                        <StyledButton2>{t("gamecontract.header.button-1")}</StyledButton2>
                    </a>
                    <a href="#faq">
                        <ArrowButton title="FAQ" label={t("gamecontract.header.button-2")} />
                    </a>
                </StyledButtons>
            </GenericContent>
        </FullScreenHeader>
    )
}

export default Header
