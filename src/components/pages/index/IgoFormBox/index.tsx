import { assetsUrl } from "config"
import { Trans, useTranslation } from "react-i18next"
import { StyledBoxWrapper, StyledLine, StyledForm, StyledImg, StyledTitle } from "./index.styles"

const IgoFormBox = () => {
    const { t } = useTranslation()

    return (
        <StyledBoxWrapper>
            <StyledLine />
            <StyledTitle><Trans i18nKey={"igo-form.title"} /></StyledTitle>
            <StyledForm>
                <div
                    className="ml-form-embed"
                    data-account="3556595:b7a5n7e8w5"
                    data-form="5061527:j8h9l1"
                ></div>
            </StyledForm>
            <StyledImg>
                <img src={assetsUrl("2d-cartridges/without-extras/red.png")} alt="Red HashUp cartridge" />
            </StyledImg>
        </StyledBoxWrapper>
    )
}

export default IgoFormBox
