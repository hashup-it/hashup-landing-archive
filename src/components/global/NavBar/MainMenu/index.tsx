import { MenuItem, StyledMainMenu } from "./index.styles"
import { StyledFooterTop } from "../../Footer/index.styles"
import { SelectLanguage } from "../SelectLanguage"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { SocialMediaUrls } from "config"
import FooterMenu from "components/global/Footer/FooterMenu"
import CompanyInfo from "components/global/Footer/CompanyInfo"
import SocialMediaBox from "components/global/Footer/SocialMediaBox"
import FooterBottom from "components/global/Footer/FooterBottom"
import { useRouter } from "next/dist/client/router"

export const MainMenu = ({
    isMobileMenuShown,
    setIsMobileMenuShown,
}: {
    isMobileMenuShown: boolean
    setIsMobileMenuShown?: Function
}) => {
    const router = useRouter()
    const { t } = useTranslation()

    const handleCloseAction = () => {
        setIsMobileMenuShown ? setIsMobileMenuShown(false) : new Function()
    }

    return (
        <StyledMainMenu>
            <MenuItem isSelected={router.asPath === "/"}>
                <Link href="/" passHref>
                    <a onClick={handleCloseAction} title="Ecosystem">
                        {t("menu.home")}
                    </a>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link href="/#ecosystem" passHref>
                    <a onClick={handleCloseAction} title="Ecosystem">
                        {t("menu.ecosystem")}
                    </a>
                </Link>
            </MenuItem>
            <MenuItem isSelected={router.asPath === "/cartridges"}>
                <Link href="/cartridges" passHref>
                    <a onClick={handleCloseAction} title="Cartridges">
                        {t("menu.cartridges")}
                    </a>
                </Link>
            </MenuItem>
            <MenuItem>
                <a href={SocialMediaUrls.linkedIn} title="Media">
                    {t("menu.media")}
                </a>
            </MenuItem>
            <MenuItem>
                <a href={SocialMediaUrls.gitbook} title="Documentation">
                    {t("menu.doc")}
                </a>
            </MenuItem>
            <SelectLanguage />
            {isMobileMenuShown && (
                <>
                    <SocialMediaBox />
                    <StyledFooterTop>
                        <CompanyInfo />
                        <FooterMenu />
                    </StyledFooterTop>
                    <FooterBottom />
                </>
            )}
        </StyledMainMenu>
    )
}
