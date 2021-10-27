import { useState } from 'react'
import { StyledCopyGroup, StyledTokenIcon, Tooltip } from '../index.styles'


export const CopyAdress = () => {

    const [showAnimation, setShowAnimation] = useState(false)
    const [tooltipText, setTooltipText] = useState('Copy address')

    const fireAnimation = (time: number) => {
        setShowAnimation(true)
        setTooltipText('Address copied!')
        setTimeout(() => {
            setShowAnimation(false)
            setTooltipText('Copy address')
        }, time)
    }

    const handleClick = () => {
        navigator.clipboard.writeText('0x2ce9daaaecf41914504d60ea9c7c8df1dc44ba9f')
        fireAnimation(2000)
    }

    return (
        <StyledCopyGroup onClick={() => handleClick()}>

            <StyledTokenIcon icon="/assets/icons/LogoIcon.svg" />
            0x2ce…BA9f
            <StyledTokenIcon icon={!showAnimation ? '/assets/icons/copy-red.svg' : '/assets/icons/copy.svg'}>
                <Tooltip>{tooltipText}</Tooltip>
            </StyledTokenIcon>

        </StyledCopyGroup>
    )
}
