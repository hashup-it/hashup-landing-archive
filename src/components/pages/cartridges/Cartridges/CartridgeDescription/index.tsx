import { FC, useEffect, useState } from "react"
import { StyledColoredText } from "components/shared/utils.styles"
import {
    CartridgeDescriptionContainer,
    StyledImageBox,
    StyledBulletList,
    StyledLabel,
    StyledDescriptionBox,
    StyledHook,
    CartridgeTargetContent,
    CartridgeInfoBox,
    CartridgeTargetItemContent,
    StyledDescriptionArea,
    StyledFlare,
} from "./index.style"
import { useTranslation } from "react-i18next"
import { assetsUrl, CartridgeType } from "config"
import { CartridgeInterface } from "../../interfaces"
import { capitalizeFirstLetter } from "util/string"
import { StyledSectionTitle, StyledSmallSectionLabel } from "components/shared/section.styles"
import dynamic from "next/dynamic"
import { StyledLoadingSpinner } from "components/shared/loading.styles"

const Cartridge3d = dynamic(() => import("./Cartridge3d"), {
    ssr: false,
    loading: () => <StyledLoadingSpinner />,
})

interface Props extends CartridgeInterface {
    readonly leftBasedLayout: boolean
}

const CartridgeDescription: FC<Props> = ({ leftBasedLayout, type, color, numberOfBullets }) => {
    const { t } = useTranslation()
    const colorText: string = CartridgeType[type]
    const [isCartridgeShown, setIsCartridgeShown] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => setIsCartridgeShown(true), 650)
    }, [isCartridgeShown])

    return (
        <CartridgeDescriptionContainer leftBasedLayout={leftBasedLayout}>
            <StyledHook id={colorText} />
            <StyledDescriptionArea>
                <StyledDescriptionBox leftBasedLayout={leftBasedLayout}>
                    <StyledSectionTitle>
                        <StyledColoredText color={color}>
                            {capitalizeFirstLetter(colorText)}
                        </StyledColoredText>{" "}
                        Cartridge
                    </StyledSectionTitle>
                    <StyledLabel>{t(`cartridges-tab.${colorText}.description`)}</StyledLabel>
                    <CartridgeInfoBox>
                        <CartridgeTargetItemContent>
                            <StyledSmallSectionLabel>
                                {t("cartridges-tab.cartridge-for")}
                            </StyledSmallSectionLabel>
                            <CartridgeTargetContent>
                                {t(`cartridges-tab.${colorText}.target`)}
                            </CartridgeTargetContent>
                        </CartridgeTargetItemContent>
                    </CartridgeInfoBox>
                    <StyledBulletList markerSrc={assetsUrl(`icons/check-${colorText}.svg`)}>
                        {Array.from(Array(numberOfBullets).keys()).map((_, index) => (
                            <li key={index}>
                                {t(`cartridges-tab.${colorText}.bullet-${index + 1}`)}
                            </li>
                        ))}
                    </StyledBulletList>
                </StyledDescriptionBox>
            </StyledDescriptionArea>
            <StyledImageBox mobileImageUrl={assetsUrl(`models/2d/${colorText}.png`)}>
                <StyledFlare color={color} />
                {isCartridgeShown ? <Cartridge3d type={type} /> : <StyledLoadingSpinner />}
            </StyledImageBox>
        </CartridgeDescriptionContainer>
    )
}

export default CartridgeDescription
