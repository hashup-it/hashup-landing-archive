import { StyledColoredText } from "components/shared/utils.styles"
import { BrandAssets } from "config"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import {
    StyledAccentDash,
    StyledFooter,
    StyledFooterTop,
    StyledHeading,
    StyledLogo,
    StyledQuickNavigation,
} from "./index.styles"
import Newsletter from "./Newsletter"
import SocialMediaBox from "./SocialMediaBox"
import CompanyInfo from "./CompanyInfo"
import FooterBottom from "./FooterBottom"
import FooterMenu from "./FooterMenu"

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <StyledFooter>
            <StyledHeading>
                <Link href="/" passHref>
                    <StyledLogo src={BrandAssets.logo} />
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
