import { useTranslation } from "react-i18next"
import { ColoredText } from "../Shared"
import {
    StyledBackgroundFlare,
    CartridgesHeaderContainer,
    CartridgesTabContainer,
    StyledTabTitle,
    StyledCartridgeThumbnailsBox,
    SmallCartridgeHeaderText,
} from "./index.styles"
import CartridgeDescription from "./CartridgeDescription"
import CartridgeThumbnail from "./CartridgeThumbnail"

import { assetsUrl } from "config"
import { cartridgesData } from "./data"

export const CartridgesTab = () => {
    const { t } = useTranslation()

    return (
        <CartridgesTabContainer>
            <StyledBackgroundFlare />
            <CartridgesHeaderContainer>
                <StyledTabTitle>
                    {t("cartridges-tab.header")}
                    <ColoredText>.</ColoredText>
                </StyledTabTitle>
                <SmallCartridgeHeaderText>
                    {t("cartridges-tab.header-small-1")}
                    <br />
                    {t("cartridges-tab.header-small-2")}
                </SmallCartridgeHeaderText>
                <StyledCartridgeThumbnailsBox>
                    {cartridgesData.map((item, index) => (
                        <CartridgeThumbnail key={index} color={item.color} type={item.type} />
                    ))}
                </StyledCartridgeThumbnailsBox>
            </CartridgesHeaderContainer>

            {cartridgesData.map((item, index) => (
                <CartridgeDescription key={index} leftBasedLayout={index % 2 == 0} {...item} />
            ))}
        </CartridgesTabContainer>
    )
}
