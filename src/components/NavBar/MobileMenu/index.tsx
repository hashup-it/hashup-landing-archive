import { FunctionComponent } from "react"
import { MainMenu } from "../MainMenu"
import { StyledMobileMenu } from "./index.styles"

export const MobileMenu :FunctionComponent<{opened : boolean}> = ({
    opened
}) => {
    return (
        <StyledMobileMenu opened={opened}>
            <MainMenu/>
        </StyledMobileMenu>
    )  
}