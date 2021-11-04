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

export const MainMenu = ({ isMobileMenuShown }: { isMobileMenuShown: boolean }) => {
    const { t } = useTranslation()

    return (
        <StyledMainMenu>
            <MenuItem>
                <Hyperlink href="/#ecosystem">{t("ecosystem")}</Hyperlink>
                {/*<Icon src='/assets/icons/chevron-down.svg'/>*/}
            </MenuItem>
            {/*<MenuItem>Team</MenuItem>*/}
            <MenuItem>
                <Hyperlink href="https://www.linkedin.com/company/hashupit">{t("media")}</Hyperlink>
            </MenuItem>
            {/*<MenuItem>Investment</MenuItem>*/}
            <MenuItem>
                <Hyperlink href="https://hashup-it.gitbook.io/hashup-it-1/">{t("doc")}</Hyperlink>
                {/*<Icon src='/assets/icons/chevron-down.svg'/>*/}
            </MenuItem>
            <SelectLanguage />
            {isMobileMenuShown && (
                <>
                    <SocialMediaGroup>
                        <a href="https://www.linkedin.com/company/hashupit">
                            <Icon url={"linkedin.svg"} />
                        </a>
                        <a href="https://t.me/HashUpAnnouncements">
                            <Icon url={"telegram.svg"} />
                        </a>
                        <a href="https://twitter.com/HashUp_it">
                            <Icon url={"twitter.svg"} />
                        </a>
                        <a href="https://www.facebook.com/HashUpIt">
                            <Icon url={"facebook.svg"} />
                        </a>
                        <a href="https://www.instagram.com/hashup.it/">
                            <Icon url={"instagram.svg"} />
                        </a>
                    </SocialMediaGroup>
                    <FooterTop>
                        <ListHeader>{t("headquarters")}</ListHeader>
                        <ContactField>
                            <AddressLineEmphasized>HashUp P.S.A.</AddressLineEmphasized>
                            Al. Jana Pawła II 27
                            <br />
                            00-867 {t("warsaw")}
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
