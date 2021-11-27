import { useTranslation } from "react-i18next"
import { ColoredText } from "../Shared"
import {
    BackgroundShade,
    CartridgesHeaderContainer,
    CartridgesTabContainer,
    CartridgesTabHeader,
    CartridgeThumbnailsContainer,
    SmallCartridgeHeaderText,
} from "./index.styles"
import { CartridgeDescription } from "./CartridgeDescription"
import { CartridgeThumbnail } from "./CartridgeThumbnail"

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

export const CartridgesTab = () => {
    const { t } = useTranslation()

    return (
        <CartridgesTabContainer>
            <BackgroundShade src="/assets/sphere-shade.svg" />
            <CartridgesHeaderContainer>
                <CartridgesTabHeader>
                    {t("cartridges-tab.header")}
                    <ColoredText>.</ColoredText>
                </CartridgesTabHeader>
                <SmallCartridgeHeaderText>
                    {t("cartridges-tab.header-small-1")}
                    <br />
                    {t("cartridges-tab.header-small-2")}
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
                descriptionText={t("cartridges-tab.green.description")}
                targetText={t("cartridges-tab.green.target")}
                descriptionListContents={[
                    t("cartridges-tab.green.bullet-1"),
                    t("cartridges-tab.green.bullet-2"),
                    t("cartridges-tab.green.bullet-3"),
                    t("cartridges-tab.green.bullet-4"),
                ]}
                cartridgeModel={<ModelGreen rotation={[0, -2, Math.PI / 128]} />}
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
                cartridgeModel={<ModelGold rotation={[0, -2, Math.PI / 128]} />}
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
                cartridgeModel={<ModelBlue rotation={[0, -2, Math.PI / 128]} />}
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
                cartridgeModel={<ModelGray rotation={[0, -2, Math.PI / 128]} />}
                cartridgeModelMobileUri="/assets/models/mobile/gray.png"
            />
            <CartridgeDescription
                leftBasedLayout={true}
                color={CartridgeColor.Red}
                headerCartridgeTypeText="Red"
                descriptionText={t("cartridges-tab.red.description")}
                targetText={t("cartridges-tab.red.target")}
                descriptionListContents={[t("cartridges-tab.red.bullet-1")]}
                cartridgeModel={<ModelRed rotation={[0, -2, Math.PI / 128]} />}
                cartridgeModelMobileUri="/assets/models/mobile/red.png"
            />
        </CartridgesTabContainer>
    )
}
