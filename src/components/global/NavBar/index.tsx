import { useState } from "react"
import Link from "next/link"
import { ConnectWallet } from "./ConnectWallet"
import {
    HamburgerButton,
    StyledLogoWrapper,
    MenuWrapper,
    MobileHideWrapper,
    StyledNavBar,
} from "./index.styles"
import { MainMenu } from "./MainMenu"
import { MobileMenu } from "./MobileMenu"
import { useNavBarScrollEffect } from "./logic"
import Image from "next/image"
import { BrandAssets } from "config"

const NavBar = () => {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState<boolean>(false)
    const { navBarState } = useNavBarScrollEffect() // For desktop only

    return (
        <>
            <StyledNavBar state={navBarState}>
                <MenuWrapper>
                    <Link href="/" passHref>
                        <a>
                            <StyledLogoWrapper>
                                <div className="full-logo">
                                    <Image
                                        src={BrandAssets.logo}
                                        width={150}
                                        height={35}
                                        alt=""
                                        quality={60}
                                        priority
                                    />
                                </div>
                                <div className="icon-logo">
                                    <Image
                                        src={BrandAssets.logoIcon}
                                        width={35}
                                        height={35}
                                        alt=""
                                        priority
                                    />
                                </div>
                            </StyledLogoWrapper>
                        </a>
                    </Link>
                    <MobileHideWrapper>
                        <MainMenu isMobileMenuShown={isMobileMenuShown} />
                    </MobileHideWrapper>
                    <ConnectWallet />
                    <HamburgerButton
                        opened={isMobileMenuShown}
                        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
                    />
                </MenuWrapper>
            </StyledNavBar>
            {isMobileMenuShown && (
                <MobileMenu opened={isMobileMenuShown} setOpened={setIsMobileMenuShown} />
            )}
        </>
    )
}

export default NavBar
