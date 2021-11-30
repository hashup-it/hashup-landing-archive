import { FC } from "react"
import { SectionHeader } from "../../Shared/sections.styles"
import { ColoredText } from "../../Shared"
import { Swatches } from "__styles__/Swatches"
import { CameraDistance, CartridgeScene } from "../../CartridgeScene"
import {
    CartridgeDescriptionContainer,
    StyledImageBox,
    StyledBulletList,
    StyledLabel,
    StyledDescriptionBox,
    StyledHook,
    CartridgeTargetContent,
    CartridgeTargetItem,
    CartridgeTargetItemContent,
    CartridgeTargetLabel,
    StyledDescriptionArea
} from "./index.style"
import { ReactElement } from "react"
import { useTranslation } from "react-i18next"
import { assetsUrl } from "config"

interface CartridgeDescriptionProps {
    readonly leftBasedLayout: boolean
    readonly color: string
    readonly headerCartridgeTypeText: string
    readonly descriptionText: string
    readonly targetText: string
    readonly descriptionListContents: string[]
    readonly cartridgeModel: ReactElement
    readonly cartridgeModelMobileUri: string
}

const CartridgeDescription: FC<CartridgeDescriptionProps> = ({
    leftBasedLayout,
    color,
    headerCartridgeTypeText,
    descriptionText,
    targetText,
    descriptionListContents,
    cartridgeModel,
    cartridgeModelMobileUri,
}) => {
    const { t } = useTranslation()

    return (
        <CartridgeDescriptionContainer leftBasedLayout={leftBasedLayout}>
            <StyledHook id={headerCartridgeTypeText.toLowerCase()} />
            <StyledDescriptionArea>
                <StyledDescriptionBox leftBasedLayout={leftBasedLayout}>
                    <SectionHeader>
                        <ColoredText color={color}>{headerCartridgeTypeText}</ColoredText> Cartridge
                    </SectionHeader>
                    <StyledLabel>{descriptionText}</StyledLabel>
                    <CartridgeTargetItem outlineColor={Swatches.cartridge_target_outline_color}>
                        <CartridgeTargetItemContent>
                            <CartridgeTargetLabel>
                                {t("cartridges-tab-cartridge-for")}
                            </CartridgeTargetLabel>
                            <CartridgeTargetContent>{targetText}</CartridgeTargetContent>
                        </CartridgeTargetItemContent>
                    </CartridgeTargetItem>
                    <StyledBulletList markerResource={assetsUrl("icons/check-green.svg")}>
                        {descriptionListContents.map(content => (
                            <li key={content}>{content}</li>
                        ))}
                    </StyledBulletList>
                </StyledDescriptionBox>
            </StyledDescriptionArea>
            <StyledImageBox mobileImageUri={cartridgeModelMobileUri}>
                <CartridgeScene
                    cameraDistance={CameraDistance.cartridgesListing}
                    cartridgeModel={cartridgeModel}
                />
            </StyledImageBox>
        </CartridgeDescriptionContainer>
    )
}

export default CartridgeDescription
