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
import { NavLink } from "react-router-dom"

export const MainMenu = ({ isMobileMenuShown }: { isMobileMenuShown: boolean }) => {
    return (
        <StyledMainMenu>
            <MenuItem>
                <Hyperlink href="/#ecosystem">Ecosystem</Hyperlink>
                {/*<Icon src='/assets/icons/chevron-down.svg'/>*/}
            </MenuItem>
            <MenuItem>
                <NavLink to="/Cartridges">Cartridges</NavLink>
            </MenuItem>
            {/*<MenuItem>Team</MenuItem>*/}
            <MenuItem>
                <Hyperlink href="https://www.linkedin.com/company/hashupit">Media</Hyperlink>
            </MenuItem>
            {/*<MenuItem>Investment</MenuItem>*/}
            <MenuItem>
                <Hyperlink href="https://hashup-it.gitbook.io/hashup-it-1/">Docs</Hyperlink>
                {/*<Icon src='/assets/icons/chevron-down.svg'/>*/}
            </MenuItem>
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
                        <ListHeader>Nasza siedziba</ListHeader>
                        <ContactField>
                            <AddressLineEmphasized>HashUp P.S.A.</AddressLineEmphasized>
                            Al. Jana Pawła II 27
                            <br />
                            00-867 Warszawa
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
