import { HeaderText } from "./HeaderText"
import { CartridgeContainer, LandingHeaderContainer } from "./index.styles"
import { CameraDistance, CartridgeScene } from "../CartridgeScene"
import HeaderBottom from "./HeaderBottom"

const LandingHeader = () => (
    <LandingHeaderContainer>
        <HeaderText />
        <CartridgeContainer>
            <CartridgeScene cameraDistance={CameraDistance.mainLanding} />
        </CartridgeContainer>
        <HeaderBottom />
    </LandingHeaderContainer>
)

export default LandingHeader
