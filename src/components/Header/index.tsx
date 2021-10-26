import React from 'react'
import { HeaderText } from './HeaderText'
import { CartirdgeContainer, LandingHeaderContainer } from './index.styles'
import { CameraDistances, CartridgeScene } from '../CartridgeScene'
import HeaderBottom from './HeaderBottom'

export const LandingHeader = () => {
    return (
        <LandingHeaderContainer>
            <HeaderText />
            <CartirdgeContainer>
                <CartridgeScene cameraDistance={CameraDistances.mainLanding} />
            </CartirdgeContainer>
            <HeaderBottom />
        </LandingHeaderContainer>
    )
}
