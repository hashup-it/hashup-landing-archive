import {
    StyledMenuItem,
    StyledMainMenu,
    StyledEcosystemBox,
    StyledEcosystemItem,
} from "./index.styles"
import { StyledFooterTop } from "../../Footer/index.styles"
import { SelectLanguage } from "../SelectLanguage"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { assetsUrl, SocialMediaUrls } from "config"
import FooterMenu from "components/global/Footer/FooterMenu"
import CompanyInfo from "components/global/Footer/CompanyInfo"
import SocialMediaBox from "components/global/Footer/SocialMediaBox"
import FooterBottom from "components/global/Footer/FooterBottom"
import { useRouter } from "next/dist/client/router"
import { FC, useState } from "react"
import { allEcosystemUrls, ecosystemData } from "./data"
import Image from "next/image"
import { useEffect } from "react"

export interface EcosystemItemProps {
    readonly href: string
    readonly label: string
}

const EcosystemItem: FC<EcosystemItemProps> = ({ href, label }) => {
    const router = useRouter()

    return (
        <StyledEcosystemItem isSelected={router.asPath === href}>
            <Link href={href} passHref>
                <a title={label}>{label}</a>
            </Link>
        </StyledEcosystemItem>
    )
}

const EcosystemMenu: FC<{ readonly isSelected: boolean }> = ({ isSelected }) => {
    const { t } = useTranslation()
    const [isExpanded, setIsExpanded] = useState<boolean>(true)

    useEffect(() => {
        // Hide on route change
    }, [])

    return (
        <StyledEcosystemBox
            isSelected={isSelected}
            isExpanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <span className="label">
                {t("menu.ecosystem")}
                <div className="icon-wrapper">
                    <Image src={assetsUrl("random-icons/gray-arrow.svg")} alt="" width={20} height={20} />
                </div>
            </span>
            <ul className="menu">
                {ecosystemData.map((item, index) => (
                    <EcosystemItem key={index} href={item.href} label={item.label} />
                ))}
            </ul>
        </StyledEcosystemBox>
    )
}

const MainMenu: FC<{ readonly isMobileMenuShown: boolean }> = ({ isMobileMenuShown }) => {
    const router = useRouter()
    const { t } = useTranslation()

    return (
        <StyledMainMenu>
            {/* <EcosystemMenu isSelected={allEcosystemUrls.includes(router.asPath)} /> */}
            <StyledMenuItem>
                <Link href="/#ecosystem" passHref>
                    <a title="Ecosystem">{t("menu.ecosystem")}</a>
                </Link>
            </StyledMenuItem>
            <StyledMenuItem isSelected={router.asPath === "/cartridges"}>
                <Link href="/cartridges" passHref>
                    <a title="Cartridges">{t("menu.cartridges")}</a>
                </Link>
            </StyledMenuItem>
            <StyledMenuItem isSelected={router.asPath === "/media"}>
                <Link href="/media" passHref>
                    <a title="Media">{t("menu.media")}</a>
                </Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <a
                    href={SocialMediaUrls.gitbook}
                    title="Documentation"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t("menu.doc")}
                </a>
            </StyledMenuItem>
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

export default MainMenu
