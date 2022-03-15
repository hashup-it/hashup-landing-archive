import GenericContent from "components/shared/Header/GenericContent"
import FullScreenHeader from "components/shared/Header/FullScreenHeader"
import { Trans, useTranslation } from "react-i18next"
import { StyledInfoBox, StyledBackground } from "./index.styles"
import BottomNav from "components/shared/Header/BottomNav"
import Image from "next/image"

import tabletImg from "/public/assets/infographics/game-wallet/tablet.png"
import phoneImg from "/public/assets/infographics/game-wallet/phone.png"
import redDotsImg from "/public/assets/design-elements/red-dots-1.png"

const Background = () => (
    <StyledBackground>
        <div className="tablet-img">
            <Image
                src={tabletImg}
                alt="GameWallet tablet preview"
                loading="lazy"
                placeholder="blur"
                quality={30}
                sizes="(min-width: 600px) 1200px, (max-width: 600px) 120%, 100%"
            />
        </div>
        <div className="phone-img">
            <Image
                src={phoneImg}
                alt="GameWallet phone preview"
                loading="lazy"
                placeholder="blur"
                quality={45}
            />
        </div>
        <div className="red-dots">
            <Image src={redDotsImg} alt="" quality={8} sizes="400px" />
        </div>
        <div className="red-flare" />
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
                label={<Trans i18nKey="gamewallet.header.label" />}
                title={<Trans i18nKey="gamewallet.header.title" />}
                paragraph={<Trans i18nKey="gamewallet.header.paragraph" />}
            >
                <StyledInfoBox>{t("gamewallet.header.info-box")}</StyledInfoBox>
            </GenericContent>
        </FullScreenHeader>
    )
}

export default Header
