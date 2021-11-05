import React from 'react'
import { ColoredText } from '../Shared'
import {
    BackgroundShade,
    CartridgesHeaderContainer,
    CartridgesTabContainer,
    CartridgesTabHeader,
    CartridgeThumbnailsContainer,
    SmallCartridgeHeaderText
} from './index.styles'
import { CartridgeDescription } from './CartridgeDescription'
import { CartridgeThumbnail } from './CartridgeThumbnail'

import ModelRed from '../../components/CartridgeScene/Three/ModelRed'
import ModelBlue from '../../components/CartridgeScene/Three/ModelBlue'
import ModelGray from '../../components/CartridgeScene/Three/ModelGray'
import ModelGreen from '../../components/CartridgeScene/Three/ModelGreen'
import ModelGold from '../../components/CartridgeScene/Three/ModelGold'

export enum CartridgeColor {
    Green = '#6AAD38',
    Gold = '#BEA379',
    Blue = '#468CF4',
    Gray = '#9D9D9D',
    Red = '#FF3F3F'
}

export const CartridgesTab = () => {
    return (
        <CartridgesTabContainer>
            <BackgroundShade src="/assets/sphere-shade.svg" />
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
                        cartridgeType="Green"
                        cartridgeColor={CartridgeColor.Green}
                        cartridgeLink="#green"
                    />
                    <CartridgeThumbnail
                        cartridgeType="Gold"
                        cartridgeColor={CartridgeColor.Gold}
                        cartridgeLink="#gold"
                    />
                    <CartridgeThumbnail
                        cartridgeType="Blue"
                        cartridgeColor={CartridgeColor.Blue}
                        cartridgeLink="#blue"
                    />
                    <CartridgeThumbnail
                        cartridgeType="Gray"
                        cartridgeColor={CartridgeColor.Gray}
                        cartridgeLink="#gray"
                    />
                    <CartridgeThumbnail
                        cartridgeType="Red"
                        cartridgeColor={CartridgeColor.Red}
                        cartridgeLink="#red"
                    />
                </CartridgeThumbnailsContainer>
            </CartridgesHeaderContainer>
            <CartridgeDescription
                leftBasedLayout={true}
                color={CartridgeColor.Green}
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
                cartridgeModel={<ModelGreen rotation={[0, -2, Math.PI / 128]} />}
            />
            <CartridgeDescription
                leftBasedLayout={false}
                color={CartridgeColor.Gold}
                headerCartridgeTypeText="Gold"
                descriptionText="A free software market is a natural consequence of putting software in the hands of players."
                targetText="Test target description"
                descriptionListContents={[
                    'Lorem ipslum dolores',
                    'Menespeh amet dis dolor'
                ]}
                cartridgeModel={<ModelGold rotation={[0, -2, Math.PI / 128]} />}
            />
            <CartridgeDescription
                leftBasedLayout={true}
                color={CartridgeColor.Blue}
                headerCartridgeTypeText="Blue"
                descriptionText="A free software market is a natural consequence of putting software in the hands of players."
                targetText="Test target description"
                descriptionListContents={[
                    'Lorem ipslum dolores',
                    'Menespeh amet dis dolor',
                    'Lorem ipslum dolores',
                    'Lorem ipslum dolores'
                ]}
                cartridgeModel={<ModelBlue rotation={[0, -2, Math.PI / 128]} />}
            />
            <CartridgeDescription
                leftBasedLayout={false}
                color={CartridgeColor.Gray}
                headerCartridgeTypeText="Gray"
                descriptionText="A free software market is a natural consequence of putting software in the hands of players."
                targetText="Test target description"
                descriptionListContents={[
                    'Lorem ipslum dolores',
                    'Menespeh amet dis dolor',
                    'Lorem ipslum dolores'
                ]}
                cartridgeModel={<ModelGray rotation={[0, -2, Math.PI / 128]} />}
            />
            <CartridgeDescription
                leftBasedLayout={true}
                color={CartridgeColor.Red}
                headerCartridgeTypeText="Red"
                descriptionText="A free software market is a natural consequence of putting software in the hands of players."
                targetText="Test target description"
                descriptionListContents={[
                    'Lorem ipslum dolores'
                ]}
                cartridgeModel={<ModelRed rotation={[0, -2, Math.PI / 128]} />}
            />
        </CartridgesTabContainer>
    )
}
