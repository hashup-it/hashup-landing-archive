import { useTranslation } from "react-i18next"
import { ColoredText } from "../Shared"
import {
    StyledBackgroundFlare,
    CartridgesHeaderContainer,
    CartridgesTabContainer,
    StyledTabTitle,
    StyledCartridgeThumbnailsBox,
    SmallCartridgeHeaderText,
} from "./index.styles"
import CartridgeDescription from "./CartridgeDescription"
import CartridgeThumbnail from "./CartridgeThumbnail"

import ModelRed from "../../components/CartridgeScene/Three/ModelRed"
import ModelBlue from "../../components/CartridgeScene/Three/ModelBlue"
import ModelGray from "../../components/CartridgeScene/Three/ModelGray"
import ModelGreen from "../../components/CartridgeScene/Three/ModelGreen"
import ModelGold from "../../components/CartridgeScene/Three/ModelGold"

export enum CartridgeColor {
    Green = "#6AAD38",
    Gold = "#BEA379",
    Blue = "#468CF4",
    Gray = "#9D9D9D",
    Red = "#FF3F3F",
}

const ROTATION: number[] = [0, -2, Math.PI / 128]

export enum CartridgeTypeEnum {
    green,
    gold,
    blue,
    gray,
    red,
}

export interface CartridgeThumbnailInterface {
    readonly type: CartridgeTypeEnum
    readonly color: CartridgeColor
}

const cartridgesThumbnails: CartridgeThumbnailInterface[] = [
    {
        type: CartridgeTypeEnum.green,
        color: CartridgeColor.Green,
    },
    {
        type: CartridgeTypeEnum.gold,
        color: CartridgeColor.Gold,
    },
    {
        type: CartridgeTypeEnum.blue,
        color: CartridgeColor.Blue,
    },
    {
        type: CartridgeTypeEnum.gray,
        color: CartridgeColor.Gray,
    },
    {
        type: CartridgeTypeEnum.red,
        color: CartridgeColor.Red,
    },
]

export const CartridgesTab = () => {
    const { t } = useTranslation()

    return (
        <CartridgesTabContainer>
            <StyledBackgroundFlare />
            <CartridgesHeaderContainer>
                <StyledTabTitle>
                    {t("cartridges-tab.header")}
                    <ColoredText>.</ColoredText>
                </StyledTabTitle>
                <SmallCartridgeHeaderText>
                    {t("cartridges-tab.header-small-1")}
                    <br />
                    {t("cartridges-tab.header-small-2")}
                </SmallCartridgeHeaderText>
                <StyledCartridgeThumbnailsBox>
                    {cartridgesThumbnails.map((item, index) => (
                        <CartridgeThumbnail key={index} type={item.type} color={item.color} />
                    ))}
                </StyledCartridgeThumbnailsBox>
            </CartridgesHeaderContainer>
            <CartridgeDescription
                leftBasedLayout={true}
                color={CartridgeColor.Green}
                headerCartridgeTypeText="Green"
                descriptionText={t("cartridges-tab.green.description")}
                targetText={t("cartridges-tab.green.target")}
                descriptionListContents={[
                    t("cartridges-tab.green.bullet-1"),
                    t("cartridges-tab.green.bullet-2"),
                    t("cartridges-tab.green.bullet-3"),
                    t("cartridges-tab.green.bullet-4"),
                ]}
                cartridgeModel={<ModelGreen rotation={ROTATION} />}
                cartridgeModelMobileUri="/assets/models/mobile/green.png"
            />
            <CartridgeDescription
                leftBasedLayout={false}
                color={CartridgeColor.Gold}
                headerCartridgeTypeText="Gold"
                descriptionText={t("cartridges-tab.gold.description")}
                targetText={t("cartridges-tab.gold.target")}
                descriptionListContents={[
                    t("cartridges-tab.gold.bullet-1"),
                    t("cartridges-tab.gold.bullet-2"),
                    t("cartridges-tab.gold.bullet-3"),
                    t("cartridges-tab.gold.bullet-4"),
                ]}
                cartridgeModel={<ModelGold rotation={ROTATION} />}
                cartridgeModelMobileUri="/assets/models/mobile/gold.png"
            />
            <CartridgeDescription
                leftBasedLayout={true}
                color={CartridgeColor.Blue}
                headerCartridgeTypeText="Blue"
                descriptionText={t("cartridges-tab.blue.description")}
                targetText={t("cartridges-tab.blue.target")}
                descriptionListContents={[
                    t("cartridges-tab.blue.bullet-1"),
                    t("cartridges-tab.blue.bullet-2"),
                    t("cartridges-tab.blue.bullet-3"),
                    t("cartridges-tab.blue.bullet-4"),
                ]}
                cartridgeModel={<ModelBlue rotation={ROTATION} />}
                cartridgeModelMobileUri="/assets/models/mobile/blue.png"
            />
            <CartridgeDescription
                leftBasedLayout={false}
                color={CartridgeColor.Gray}
                headerCartridgeTypeText="Gray"
                descriptionText={t("cartridges-tab.gray.description")}
                targetText={t("cartridges-tab.gray.target")}
                descriptionListContents={[
                    t("cartridges-tab.gray.bullet-1"),
                    t("cartridges-tab.gray.bullet-2"),
                    t("cartridges-tab.gray.bullet-3"),
                    t("cartridges-tab.gray.bullet-4"),
                ]}
                cartridgeModel={<ModelGray rotation={ROTATION} />}
                cartridgeModelMobileUri="/assets/models/mobile/gray.png"
            />
            <CartridgeDescription
                leftBasedLayout={true}
                color={CartridgeColor.Red}
                headerCartridgeTypeText="Red"
                descriptionText={t("cartridges-tab.red.description")}
                targetText={t("cartridges-tab.red.target")}
                descriptionListContents={[t("cartridges-tab.red.bullet-1")]}
                cartridgeModel={<ModelRed rotation={ROTATION} />}
                cartridgeModelMobileUri="/assets/models/mobile/red.png"
            />
        </CartridgesTabContainer>
    )
}
