import GenericContent from "components/shared/Header/GenericContent"
import FullScreenHeader from "components/shared/Header/FullScreenHeader"
import { Trans, useTranslation } from "react-i18next"
import { StyledButtons, StyledBackground } from "./index.styles"
import { StyledButton2 } from "components/shared/buttons.styles"
import { ArrowButton } from "components/shared/ArrowButton"
import BottomNav from "components/shared/Header/BottomNav"
import Image from "next/image"

import laptopImg from "/public/assets/infographics/game-contract/laptop.png"
import redDotsImg from "/public/assets/design-elements/red-dots-4.png"

const Background = () => (
    <StyledBackground>
        <div className="laptop-img">
            <Image
                src={laptopImg}
                alt="GameContract preview"
                loading="lazy"
                placeholder="blur"
                quality={50}
                sizes="(min-width: 600px) 1200px, (max-width: 600px) 120%, 100%"
            />
        </div>
        <div className="red-dots">
            <Image src={redDotsImg} alt="" quality={8} sizes="400px" />
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
                    {/* <a href="#faq">
                        <ArrowButton title="FAQ" label={t("gamecontract.header.button-2")} />
                    </a> */}
                </StyledButtons>
            </GenericContent>
        </FullScreenHeader>
    )
}

export default Header
