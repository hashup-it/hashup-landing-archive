import { Trans, useTranslation } from "react-i18next"
import { StyledBoxWrapper, StyledLine, StyledForm, StyledImg, StyledTitle } from "./index.styles"
import Image from "next/image"

import cartridgeImg from "/public/assets/2d-cartridges/without-extras/red.png"
import dynamic from "next/dynamic"
import LazyLoad from "react-lazyload"
import { StyledLoadingSpinner } from "components/shared/loading.styles"

const Form = dynamic(() => import("./Form"), { ssr: false })

const IgoFormBox = () => (
    <StyledBoxWrapper>
        <StyledLine />
        <StyledTitle>
            <Trans i18nKey={"igo-form.title"} />
        </StyledTitle>
        <StyledForm>
            <LazyLoad placeholder={<StyledLoadingSpinner />} offset={100} once>
                <Form />
            </LazyLoad>
        </StyledForm>
        <StyledImg>
            <div className="img-wrapper">
                <Image src={cartridgeImg} alt="Red HashUp cartridge" sizes={`55vw`} quality={60} />
            </div>
        </StyledImg>
    </StyledBoxWrapper>
)

export default IgoFormBox
