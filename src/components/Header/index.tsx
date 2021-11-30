import { HeaderText } from "./HeaderText"
import { StyledCartridgeContainer, StyledHeaderContainer, StyledBackgroundFlare } from "./index.styles"
import { CameraDistance, CartridgeScene } from "../CartridgeScene"
import HeaderBottomNav from "./HeaderBottomNav"

const LandingHeader = () => (
    <StyledHeaderContainer>
        <HeaderText />
        <StyledCartridgeContainer>
            <CartridgeScene cameraDistance={CameraDistance.mainLanding} />
        </StyledCartridgeContainer>
        <StyledBackgroundFlare />
        <HeaderBottomNav />
    </StyledHeaderContainer>
)

export default LandingHeader
