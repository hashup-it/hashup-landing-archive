import { HeaderText } from "./HeaderText"
import { StyledCartridgeContainer, StyledHeaderContainer, StyledBackgroundFlare } from "./index.styles"
import { CameraDistance, CartridgeScene } from "../CartridgeScene"
import HeaderBottom from "./HeaderBottom"

const LandingHeader = () => (
    <StyledHeaderContainer>
        <HeaderText />
        <StyledCartridgeContainer>
            <CartridgeScene cameraDistance={CameraDistance.mainLanding} />
        </StyledCartridgeContainer>
        <StyledBackgroundFlare />
        <HeaderBottom />
    </StyledHeaderContainer>
)

export default LandingHeader
