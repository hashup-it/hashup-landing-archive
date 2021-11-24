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
import { useNavBarScrollEffect } from "./logic"

const NavBar = () => {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState<boolean>(false)
    const { navBarState } = useNavBarScrollEffect() // Only for desktop

    return (
        <StyledNavBar state={navBarState}>
            <MenuWrapper>
                <Link href="/" passHref>
                    <a>
                        <LogoWrapper>
                            <LogoIcon src="/assets/icons/LogoIcon.svg" />
                            <Logo src="/assets/icons/HashUp.svg" />
                        </LogoWrapper>
                    </a>
                </Link>
                <MobileHideWrapper>
                    <MainMenu isMobileMenuShown={isMobileMenuShown} />
                </MobileHideWrapper>
                <ButtonsMenu>
                    <ConnectWallet />
                </ButtonsMenu>
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
