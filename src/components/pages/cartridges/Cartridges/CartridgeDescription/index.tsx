import { FC } from "react"
import { StyledColoredText } from "components/shared/utils.styles"
import { CameraDistance, CartridgeScene } from "../../CartridgeScene"
import {
    CartridgeDescriptionContainer,
    StyledImageBox,
    StyledBulletList,
    StyledLabel,
    StyledDescriptionBox,
    StyledHook,
    CartridgeTargetContent,
    CartridgeInfoBox,
    CartridgeTargetItemContent,
    StyledDescriptionArea,
    StyledFlare,
} from "./index.style"
import { useTranslation } from "react-i18next"
import { assetsUrl, CartridgeType } from "config"
import { CartridgeInterface } from "../../interfaces"
import { capitalizeFirstLetter } from "util/string"
import { StyledSectionTitle, StyledSmallSectionLabel } from "components/shared/section.styles"

interface Props extends CartridgeInterface {
    readonly leftBasedLayout: boolean
}

const CartridgeDescription: FC<Props> = ({
    leftBasedLayout,
    type,
    color,
    numberOfBullets,
    model3d,
}) => {
    const { t } = useTranslation()
    const colorText: string = CartridgeType[type]

    return (
        <CartridgeDescriptionContainer leftBasedLayout={leftBasedLayout}>
            <StyledHook id={colorText} />
            <StyledDescriptionArea>
                <StyledDescriptionBox leftBasedLayout={leftBasedLayout}>
                    <StyledSectionTitle>
                        <StyledColoredText color={color}>
                            {capitalizeFirstLetter(colorText)}
                        </StyledColoredText>{" "}
                        Cartridge
                    </StyledSectionTitle>
                    <StyledLabel>{t(`cartridges-tab.${colorText}.description`)}</StyledLabel>
                    <CartridgeInfoBox>
                        <CartridgeTargetItemContent>
                            <StyledSmallSectionLabel>
                                {t("cartridges-tab.cartridge-for")}
                            </StyledSmallSectionLabel>
                            <CartridgeTargetContent>
                                {t(`cartridges-tab.${colorText}.target`)}
                            </CartridgeTargetContent>
                        </CartridgeTargetItemContent>
                    </CartridgeInfoBox>
                    <StyledBulletList markerSrc={assetsUrl(`icons/check-${colorText}.svg`)}>
                        {Array.from(Array(numberOfBullets).keys()).map((_, index) => (
                            <li key={index}>
                                {t(`cartridges-tab.${colorText}.bullet-${index + 1}`)}
                            </li>
                        ))}
                    </StyledBulletList>
                </StyledDescriptionBox>
            </StyledDescriptionArea>
            <StyledImageBox mobileImageUrl={assetsUrl(`models/2d/${colorText}.png`)}>
                <StyledFlare color={color} />
                <CartridgeScene
                    cameraDistance={CameraDistance.cartridgesListing}
                    cartridgeModel={model3d}
                />
            </StyledImageBox>
        </CartridgeDescriptionContainer>
    )
}

export default CartridgeDescription
