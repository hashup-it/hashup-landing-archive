import { FC } from "react"
import MainMenu from "../MainMenu"
import { StyledMobileMenu } from "./index.styles"

const MobileMenu: FC<{ opened: boolean }> = ({ opened }) => (
    <StyledMobileMenu opened={opened}>
        <MainMenu isMobileMenuShown={opened} />
    </StyledMobileMenu>
)

export default MobileMenu
