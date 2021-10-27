import React from 'react'
import { ColoredText } from '../Shared'
import {
    CartridgesHeaderContainer,
    CartridgesTabContainer,
    CartridgesTabHeader,
    CartridgeThumbnail,
    CartridgeThumbnailsContainer,
    SmallCartridgeHeaderText
} from './index.styles'
import { CartridgeDescription } from './CartridgeDescription'
import { Swatches } from '../../__styles__/Swatches'

export const CartridgesTab = () => {
    return (
        <CartridgesTabContainer>
            <CartridgesHeaderContainer>
                <CartridgesTabHeader>
                    A cartridge with the game and a floppy disk with software on the
                    blockchain<ColoredText>.</ColoredText>
                </CartridgesTabHeader>
                <SmallCartridgeHeaderText>
                    You will eventually become the owner of the software you purchased.<br />
                    Send the game to a buddy, why does anyone prevent you from doing that?
                </SmallCartridgeHeaderText>
                <CartridgeThumbnailsContainer>
                    <CartridgeThumbnail
                        source="/assets/icons/cartridge-thumbnail-green.svg"
                        href="#green"
                    />
                    <CartridgeThumbnail
                        source="/assets/icons/cartridge-thumbnail-gold.svg"
                        href="#gold"
                    />
                    <CartridgeThumbnail
                        source="/assets/icons/cartridge-thumbnail-red.svg"
                        href="#red"
                    />
                </CartridgeThumbnailsContainer>
            </CartridgesHeaderContainer>
            <CartridgeDescription
                leftBasedLayout={true}
                color={Swatches.green_cartridge_color}
                headerCartridgeTypeText="Green"
                descriptionText="A free software market is a natural consequence of putting software in the hands of players."
                targetText="Test target description"
                descriptionListContents={[
                    'Lorem ipslum dolores',
                    'Menespeh amet dis dolor',
                    'Lorem ipslum dolores',
                    'Lorem ipslum dolores',
                    'Lorem ipslum dolores'
                ]}
            />
            <CartridgeDescription
                leftBasedLayout={false}
                color={Swatches.gold_cartridge_color}
                headerCartridgeTypeText="Gold"
                descriptionText="A free software market is a natural consequence of putting software in the hands of players."
                targetText="Test target description"
                descriptionListContents={[
                    'Lorem ipslum dolores',
                    'Menespeh amet dis dolor'
                ]}
            />
            <CartridgeDescription
                leftBasedLayout={true}
                color={Swatches.read_cartridge_color}
                headerCartridgeTypeText="Red"
                descriptionText="A free software market is a natural consequence of putting software in the hands of players."
                targetText="Test target description"
                descriptionListContents={[
                    'Lorem ipslum dolores'
                ]}
            />
        </CartridgesTabContainer>
    )
}
