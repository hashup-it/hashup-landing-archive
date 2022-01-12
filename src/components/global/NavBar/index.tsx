import { useState } from "react"
import Link from "next/link"
import { ConnectWallet } from "./ConnectWallet"
import {
    HamburgerButton,
    StyledLogoWrapper,
    StyledInnerBox,
    MobileHideWrapper,
    StyledNavBar,
} from "./index.styles"
import { MainMenu } from "./MainMenu"
import { MobileMenu } from "./MobileMenu"
import { useNavBarScrollEffect } from "./logic"
import Image from "next/image"
import { BrandAssets } from "config"

const Logo = () => (
    <StyledLogoWrapper>
        <div className="full-logo">
            <Link href="/" passHref>
                <a>
                    <Image
                        src={BrandAssets.logo}
                        width={150}
                        height={35}
                        alt=""
                        quality={60}
                        priority
                    />
                </a>
            </Link>
        </div>
        <div className="icon-logo">
            <Link href="/" passHref>
                <a>
                    <Image src={BrandAssets.logoIcon} width={35} height={35} alt="" priority />
                </a>
            </Link>
        </div>
    </StyledLogoWrapper>
)

const NavBar = () => {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState<boolean>(false)
    const { navBarState } = useNavBarScrollEffect() // For desktop only

    return (
        <>
            <StyledNavBar state={navBarState}>
                <StyledInnerBox>
                    <Logo />
                    <MobileHideWrapper>
                        <MainMenu isMobileMenuShown={isMobileMenuShown} />
                    </MobileHideWrapper>
                    <ConnectWallet />
                    <HamburgerButton
                        opened={isMobileMenuShown}
                        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
                    />
                </StyledInnerBox>
            </StyledNavBar>
            {isMobileMenuShown && (
                <MobileMenu opened={isMobileMenuShown} setOpened={setIsMobileMenuShown} />
            )}
        </>
    )
}

export default NavBar
