import { StyledColoredText } from "components/shared/utils.styles"
import { BrandAssets } from "config"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import {
    StyledAccentDash,
    StyledFooter,
    StyledFooterTop,
    StyledHeading,
    StyledLogoWrapper,
    StyledQuickNavigation,
} from "./index.styles"
import Newsletter from "./Newsletter"
import SocialMediaBox from "./SocialMediaBox"
import CompanyInfo from "./CompanyInfo"
import FooterBottom from "./FooterBottom"
import FooterMenu from "./FooterMenu"
import Image from "next/image"

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <StyledFooter>
            <StyledHeading>
                <Link href="/" passHref>
                    <StyledLogoWrapper>
                        <Image
                            src={BrandAssets.logo}
                            width={150}
                            height={35}
                            alt="HashUp logo"
                            quality={60}
                            loading="lazy"
                            lazyBoundary="500px"
                        />
                    </StyledLogoWrapper>
                </Link>
                <SocialMediaBox />
            </StyledHeading>
            <StyledQuickNavigation>
                <span>
                    <StyledColoredText>Hash</StyledColoredText>Up.it
                </span>
                <StyledAccentDash />
                <Link href="/">{t("footer.home")}</Link>
            </StyledQuickNavigation>
            <StyledFooterTop>
                <CompanyInfo />
                <FooterMenu />
                <Newsletter />
            </StyledFooterTop>
            <FooterBottom />
        </StyledFooter>
    )
}

export default Footer
