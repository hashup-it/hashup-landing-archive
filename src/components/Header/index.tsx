import React from 'react'
import { HeaderText } from './HeaderText'
import { CartridgeContainer, LandingHeaderContainer } from './index.styles'
import { CameraDistance, CartridgeScene } from '../CartridgeScene'
import HeaderBottom from './HeaderBottom'

export const LandingHeader = () => {
    return (
        <LandingHeaderContainer>
            <HeaderText />
            <CartridgeContainer>
                <CartridgeScene cameraDistance={CameraDistance.mainLanding} />
            </CartridgeContainer>
            <HeaderBottom />
        </LandingHeaderContainer>
    )
}
