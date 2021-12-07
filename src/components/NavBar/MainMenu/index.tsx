import { FooterTop, MenuItem, StyledMainMenu } from "./index.styles"
import { Hyperlink } from "../../Shared/sections.styles"
import {
    AddressLineEmphasized,
    CompanyIds,
    ContactField,
    Copyright,
    FooterBottom,
    FooterBottomGroup,
    FooterLink,
    Icon,
    ListHeader,
    MailLink,
    SocialMediaGroup,
} from "../../Footer/index.styles"
import { SelectLanguage } from "../SelectLanguage"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { Documents, SocialMediaIcons, SocialMediaUrls } from "config"

export const MainMenu = ({
    isMobileMenuShown,
    setIsMobileMenuShown,
}: {
    isMobileMenuShown: boolean
    setIsMobileMenuShown?: Function
}) => {
    const { t } = useTranslation()

    const handleCloseAction = () => {
        setIsMobileMenuShown ? setIsMobileMenuShown(false) : new Function()
    }

    return (
        <StyledMainMenu>
            <MenuItem>
                <Link href="/#ecosystem" passHref>
                    <Hyperlink onClick={handleCloseAction}>{t("menu.ecosystem")}</Hyperlink>
                </Link>
                {/*<Icon src='/assets/icons/chevron-down.svg'/>*/}
            </MenuItem>
            <MenuItem>
                <Link href="/cartridges" passHref>
                    <Hyperlink onClick={handleCloseAction}>{t("menu.cartridges")}</Hyperlink>
                </Link>
            </MenuItem>
            {/*<MenuItem>Team</MenuItem>*/}
            <MenuItem>
                <Hyperlink href={SocialMediaUrls.linkedIn}>{t("menu.media")}</Hyperlink>
            </MenuItem>
            {/*<MenuItem>Investment</MenuItem>*/}
            <MenuItem>
                <Hyperlink href={SocialMediaUrls.gitbook}>{t("menu.doc")}</Hyperlink>
                {/*<Icon src='/assets/icons/chevron-down.svg'/>*/}
            </MenuItem>
            <SelectLanguage />
            {isMobileMenuShown && (
                <>
                    <SocialMediaGroup>
                        <a href={SocialMediaUrls.linkedIn}>
                            <Icon url={SocialMediaIcons.linkedin} />
                        </a>
                        <a href={SocialMediaUrls.telegram}>
                            <Icon url={SocialMediaIcons.telegram} />
                        </a>
                        <a href={SocialMediaUrls.twitter}>
                            <Icon url={SocialMediaIcons.twitter} />
                        </a>
                        <a href={SocialMediaUrls.facebook}>
                            <Icon url={SocialMediaIcons.facebook} />
                        </a>
                        <a href={SocialMediaUrls.instagram}>
                            <Icon url={SocialMediaIcons.instagram} />
                        </a>
                        <a href={SocialMediaUrls.discord}>
                            <Icon url={SocialMediaIcons.discord} />
                        </a>
                    </SocialMediaGroup>
                    <FooterTop>
                        <ListHeader>{t("footer.headquarters")}</ListHeader>
                        <ContactField>
                            <AddressLineEmphasized>HashUp P.S.A.</AddressLineEmphasized>
                            Al. Jana Pawła II 27
                            <br />
                            00-867 {t("footer.warsaw")}
                            <br />
                            <br />
                            <MailLink href="mailto:hello@hashup.it">hello@hashup.it</MailLink>
                            <br />
                        </ContactField>
                        <CompanyIds>
                            NIP: 5272974670
                            <br />
                            KRS: 0000927509
                            <br />
                        </CompanyIds>
                    </FooterTop>
                    <FooterBottom>
                        <FooterBottomGroup>
                            <FooterLink>
                                <Hyperlink href={Documents.termsAndConditions}>
                                    Terms & Conditions
                                </Hyperlink>
                            </FooterLink>
                            <FooterLink>
                                <Hyperlink href={Documents.privacyPolicy}>Privacy Policy</Hyperlink>
                            </FooterLink>
                            <FooterLink>
                                <Hyperlink href={Documents.airdropTermsOfUse}>
                                    Airdrop Terms of Use
                                </Hyperlink>
                            </FooterLink>
                        </FooterBottomGroup>
                        <Copyright>Copyright © by HashUp. All Rights Reserved.</Copyright>
                    </FooterBottom>
                </>
            )}
        </StyledMainMenu>
    )
}
