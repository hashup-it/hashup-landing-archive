import { useState } from "react"
import Link from "next/link"
import { ConnectWallet } from "./ConnectWallet"
import {
    ButtonsMenu,
    HamburgerButton,
    StyledFullLogo,
    StyledLogoIcon,
    StyledLogoWrapper,
    MenuWrapper,
    MobileHideWrapper,
    StyledNavBar,
} from "./index.styles"
import { MainMenu } from "./MainMenu"
import { MobileMenu } from "./MobileMenu"
import { useNavBarScrollEffect } from "./logic"
import { assetsUrl, BrandAssets } from "config"

const NavBar = () => {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState<boolean>(false)
    const { navBarState } = useNavBarScrollEffect() // For desktop only

    return (
        <StyledNavBar state={navBarState}>
            <MenuWrapper>
                <Link href="/" passHref>
                    <a>
                        <StyledLogoWrapper>
                            <StyledLogoIcon src={BrandAssets.logoIcon} />
                            <StyledFullLogo src={BrandAssets.logo} />
                        </StyledLogoWrapper>
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
