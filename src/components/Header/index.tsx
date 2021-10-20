import React from 'react'
import { HeaderText } from './HeaderText'
import { CartirdgeContainer, LandingHeaderContainer } from './index.styles'
import { CartridgeScene } from './CartridgeScene'

export const LandingHeader = () => {
    return (
        <LandingHeaderContainer>
            <HeaderText/>
            <CartirdgeContainer>
                <CartridgeScene/>
            </CartirdgeContainer>
        </LandingHeaderContainer>
    )
}
