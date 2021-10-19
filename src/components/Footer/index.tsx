import { ColoredText } from "../Shared";
import { ColoredLine, Copyright, FooterBottom, FooterBottomGroup, FooterLink, FooterMenu, FooterTop, FooterTopLeft, Icon, Icons, Logo, MenuItem, MenuItems, MenuLabel, MenuList, StyledFooter } from "./index.styles";

export const Footer = () => {
    return (  
        <StyledFooter>
            <FooterTop>
                <FooterTopLeft>
                    <Logo src="/assets/logo.svg"/><br/>
                    HashUp P.S.A<br/>
                    Al. Jana Pawła II 27<br/>
                    00-867 Warszawa<br/>
                    NIP: 5272974670<br/>
                    KRS: 0000927509<br/>
                </FooterTopLeft>
                <FooterMenu>
                    <MenuLabel>
                        Menu <ColoredLine/>
                    </MenuLabel>
                    <MenuItems>
                        <MenuList>
                            <MenuItem>Dla kogo?</MenuItem>
                            <MenuItem>Cennik</MenuItem>
                            <MenuItem>Jak to działa?</MenuItem>
                            <MenuItem>Dla kogo?</MenuItem>
                            <MenuItem>Cennik</MenuItem>
                            <MenuItem>Jak to działa?</MenuItem>
                        </MenuList>
                        <MenuList>
                            <MenuItem>Dla kogo?</MenuItem>
                            <MenuItem>Cennik</MenuItem>
                            <MenuItem>Jak to działa?</MenuItem>
                            <MenuItem>Dla kogo?</MenuItem>
                            <MenuItem>Cennik</MenuItem>
                            <MenuItem>Jak to działa?</MenuItem>
                        </MenuList>
                        <MenuList>
                            <MenuItem>Dla kogo?</MenuItem>
                            <MenuItem>Cennik</MenuItem>
                            <MenuItem>Jak to działa?</MenuItem>
                            <MenuItem>Dla kogo?</MenuItem>
                            <MenuItem>Cennik</MenuItem>
                            <MenuItem>Jak to działa?</MenuItem>
                        </MenuList>
                        <MenuList>
                            <MenuItem>Dla kogo?</MenuItem>
                            <MenuItem>Cennik</MenuItem>
                            <MenuItem>Jak to działa?</MenuItem>
                            <MenuItem>Dla kogo?</MenuItem>
                            <MenuItem>Cennik</MenuItem>
                            <MenuItem>Jak to działa?</MenuItem>
                        </MenuList>
                    </MenuItems>
                </FooterMenu>
            </FooterTop>
            <FooterBottom>
                <Copyright>Copyright © by <ColoredText>HashUp</ColoredText>. All Rights Reserved.</Copyright>
                <FooterBottomGroup>
                    <Icons>
                        <Icon url={"facebook.svg"}></Icon>
                        <Icon url={"instagram.svg"}></Icon>
                        <Icon url={"linkedin.svg"}></Icon>
                    </Icons>
                    <FooterLink>Warunki korzystania</FooterLink>
                    <FooterLink>Polityka prywatności</FooterLink>
                </FooterBottomGroup>
            </FooterBottom>
        </StyledFooter>
    );
}
