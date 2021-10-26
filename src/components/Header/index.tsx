import React from 'react'
import { HeaderText } from './HeaderText'
import { CartirdgeContainer, LandingHeaderContainer } from './index.styles'
import { CartridgeScene, CameraDistances } from '../CartridgeScene'

export const LandingHeader = () => {
    return (
        <LandingHeaderContainer>
            <HeaderText />
            <CartirdgeContainer>
                <CartridgeScene cameraDistance={CameraDistances.mainLanding} />
            </CartirdgeContainer>
        </LandingHeaderContainer>
    )
}
