import { StyledContainer } from "./index.styles"
import CartridgeBox from "./CartridgeBox"
import { cartridgesData } from "../data"

const Cartridges = () => (
    <StyledContainer>
        {cartridgesData.map((item, index) => (
            <CartridgeBox key={index} leftBasedLayout={index % 2 == 0} {...item} />
        ))}
    </StyledContainer>
)

export default Cartridges
