import SectionType1 from "components/shared/SectionType1"
import { StyledMainImageWrapper } from "components/shared/SectionType1/index.styles"
import { Trans } from "react-i18next"
import { StyledImagesBox } from "./index.styles"
import Image from "next/image"

import licensePreviewImg from "/public/assets/game-contract/license/license-preview.png"

const Images = () => (
    <StyledImagesBox>
        <StyledMainImageWrapper>
            <Image src={licensePreviewImg} alt="License preview" />
        </StyledMainImageWrapper>
    </StyledImagesBox>
)

const License = () => (
    <SectionType1
        label=""
        anchor="how-it-works"
        title={<Trans i18nKey="gamecontract.license.title" />}
        paragraph={<Trans i18nKey="gamecontract.license.paragraph" />}
        imagesBox={<Images />}
    />
)

export default License
