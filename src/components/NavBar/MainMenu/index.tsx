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
import { SocialMediaUrlsEnum } from "config"

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
                <Hyperlink href="https://www.linkedin.com/company/hashupit">
                    {t("menu.media")}
                </Hyperlink>
            </MenuItem>
            {/*<MenuItem>Investment</MenuItem>*/}
            <MenuItem>
                <Hyperlink href="https://hashup-it.gitbook.io/hashup-it-1/">
                    {t("menu.doc")}
                </Hyperlink>
                {/*<Icon src='/assets/icons/chevron-down.svg'/>*/}
            </MenuItem>
            <SelectLanguage />
            {isMobileMenuShown && (
                <>
                    <SocialMediaGroup>
                        <a href={SocialMediaUrlsEnum.linkedIn}>
                            <Icon url={"linkedin.svg"} />
                        </a>
                        <a href={SocialMediaUrlsEnum.telegram}>
                            <Icon url={"telegram.svg"} />
                        </a>
                        <a href={SocialMediaUrlsEnum.twitter}>
                            <Icon url={"twitter.svg"} />
                        </a>
                        <a href={SocialMediaUrlsEnum.facebook}>
                            <Icon url={"facebook.svg"} />
                        </a>
                        <a href={SocialMediaUrlsEnum.instagram}>
                            <Icon url={"instagram.svg"} />
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
                                <Hyperlink href="/documents/Hash_Token_Terms_of_Use.pdf">
                                    Terms & Conditions
                                </Hyperlink>
                            </FooterLink>
                            <FooterLink>
                                <Hyperlink href="/documents/Data_Protection_Policy.pdf">
                                    Privacy Policy
                                </Hyperlink>
                            </FooterLink>
                            <FooterLink>
                                <Hyperlink href="/documents/Hash_Token_Airdrop_Terms_and_Conditions.pdf">
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
