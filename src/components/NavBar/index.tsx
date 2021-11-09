import { useState } from "react"
import Link from "next/link"
import { ConnectWallet } from "./ConnectWallet"
import {
    ButtonsMenu,
    HamburgerButton,
    Logo,
    LogoIcon,
    LogoWrapper,
    MenuWrapper,
    MobileHideWrapper,
    StyledNavBar,
} from "./index.styles"
import { MainMenu } from "./MainMenu"
import { MobileMenu } from "./MobileMenu"
import { SelectLanguage } from "./SelectLanguage"

const NavBar = () => {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState<boolean>(false)

    return (
        <StyledNavBar>
            <MenuWrapper>
                <Link href="/">
                    <LogoWrapper>
                        <LogoIcon src="/assets/icons/LogoIcon.svg" />
                        <Logo src="/assets/icons/HashUp.svg" />
                    </LogoWrapper>
                </Link>
                <MobileHideWrapper>
                    <MainMenu isMobileMenuShown={isMobileMenuShown} />
                </MobileHideWrapper>
                {
                    <ButtonsMenu>
                        {false && <SelectLanguage />}
                        <ConnectWallet />
                    </ButtonsMenu>
                }
                <HamburgerButton
                    opened={isMobileMenuShown}
                    onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
                />
                {isMobileMenuShown && (
                    <MobileMenu opened={isMobileMenuShown} setOpened={setIsMobileMenuShown} />
                )}
            </MenuWrapper>
        </StyledNavBar>
    )
}

export default NavBar
