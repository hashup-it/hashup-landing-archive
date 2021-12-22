import { FC } from "react"
import { StyledWrapper } from "./index.styles"

const GlobalContentContainer: FC<{ readonly children: JSX.Element }> = ({ children }) => (
    <StyledWrapper>{children}</StyledWrapper>
)

export default GlobalContentContainer
