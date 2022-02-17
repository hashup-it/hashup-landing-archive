import { FC } from "react"
import { StyledContentBox, StyledContainer, StyledBackgroundBox } from "./index.styles"
import SideSocialMenu from "../SideSocialMenu"

interface FullScreenHeaderProps {
    readonly children: JSX.Element
    readonly extraContent?: JSX.Element
    readonly desktopBackground: JSX.Element
    readonly mobileBackground?: JSX.Element
}

const FullScreenHeader: FC<FullScreenHeaderProps> = ({
    desktopBackground,
    mobileBackground,
    children,
    extraContent,
}) => (
    <StyledContainer>
        <SideSocialMenu />
        <StyledContentBox>
            <div className="inner">{children}</div>
            {extraContent}
        </StyledContentBox>
        <StyledBackgroundBox>
            <div className="desktop">{desktopBackground}</div>
            <div className="mobile">{mobileBackground ? mobileBackground : desktopBackground}</div>
        </StyledBackgroundBox>
    </StyledContainer>
)

export default FullScreenHeader
