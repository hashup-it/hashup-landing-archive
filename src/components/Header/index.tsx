import React from 'react'
import { HeaderText } from './HeaderText'
import { CartirdgeContainer, LandingHeaderContainer } from './index.styles'
import { CartridgeScene } from './CartridgeScene'
import HeaderBottom from './HeaderBottom'

export const LandingHeader = () => {
    return (
        <LandingHeaderContainer>
            <HeaderText />
            <CartirdgeContainer>
                <CartridgeScene />
            </CartirdgeContainer>
            <HeaderBottom/>
        </LandingHeaderContainer>
    )
}
