import React from 'react'

import { SectionHeader } from '../../Shared/sections.styles'
import { ColoredText } from '../../Shared'
import { Swatches } from '../../../__styles__/Swatches'
import { CameraDistances, CartridgeScene } from '../../CartridgeScene'
import {
    CartridgeDescriptionContainer,
    CartridgeDescriptionImage,
    CartridgeDescriptionList,
    CartridgeDescriptionSmallText,
    CartridgeDescriptionText,
    CartridgeHook,
    CartridgeTargetContent,
    CartridgeTargetItem,
    CartridgeTargetItemContent,
    CartridgeTargetLabel
} from './index.style'

export const CartridgeDescription = (
    {
        leftBasedLayout,
        color,
        headerCartridgeTypeText,
        descriptionText,
        targetText,
        descriptionListContents
    }: {
        leftBasedLayout: boolean,
        color: string,
        headerCartridgeTypeText: string,
        descriptionText: string,
        targetText: string,
        descriptionListContents: string[]
    }
) => {
    return (
        <CartridgeDescriptionContainer leftBasedLayout={leftBasedLayout}>
            <CartridgeHook id={headerCartridgeTypeText.toLowerCase()} />
            <CartridgeDescriptionText>
                <SectionHeader>
                    <ColoredText color={color}>{headerCartridgeTypeText}</ColoredText> Cartridge
                </SectionHeader>
                <CartridgeDescriptionSmallText>
                    {descriptionText}
                </CartridgeDescriptionSmallText>
                <CartridgeTargetItem outlineColor={Swatches.cartridge_target_outline_color}>
                    <CartridgeTargetItemContent>
                        <CartridgeTargetLabel>Cartridge for</CartridgeTargetLabel>
                        <CartridgeTargetContent>{targetText}</CartridgeTargetContent>
                    </CartridgeTargetItemContent>
                </CartridgeTargetItem>
                <CartridgeDescriptionList markerResource="/assets/icons/check-green.svg">
                    {
                        descriptionListContents.map(content => <li>{content}</li>)
                    }
                </CartridgeDescriptionList>
            </CartridgeDescriptionText>
            <CartridgeDescriptionImage>
                <CartridgeScene cameraDistance={CameraDistances.cartridgesListing} />
            </CartridgeDescriptionImage>
        </CartridgeDescriptionContainer>
    )
}