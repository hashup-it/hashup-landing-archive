import { useTranslation } from "react-i18next"
import { StyledContainer } from "./index.styles"
import CartridgeDescription from "./CartridgeDescription"
import { cartridgesData } from "../data"

const Cartridges = () => {
    const { t } = useTranslation()

    return (
        <StyledContainer>
            {cartridgesData.map((item, index) => (
                <CartridgeDescription key={index} leftBasedLayout={index % 2 == 0} {...item} />
            ))}
        </StyledContainer>
    )
}

export default Cartridges
