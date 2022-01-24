import { FunctionComponent } from "react"
import MainMenu from "../MainMenu"
import { StyledMobileMenu } from "./index.styles"

const MobileMenu: FunctionComponent<{ opened: boolean; setOpened: Function }> = ({
    opened,
    setOpened,
}) => (
    <StyledMobileMenu opened={opened}>
        <MainMenu isMobileMenuShown={opened} setIsMobileMenuShown={setOpened} />
    </StyledMobileMenu>
)

export default MobileMenu
