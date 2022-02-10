import { CompanyInfo } from "config"
import { useTranslation } from "react-i18next"
import { StyledListHeader } from "../index.styles"
import {
    StyledAddressLineEmphasized,
    StyledCompanyIds,
    StyledCompanyInfo,
    StyledContactField,
    StyledMailLink,
} from "./index.styles"

const CompanyInfoBox = () => {
    const { t } = useTranslation()

    return (
        <StyledCompanyInfo>
            <StyledListHeader>{t("footer.headquarters")}</StyledListHeader>
            <StyledContactField>
                <StyledAddressLineEmphasized>HashUp P.S.A.</StyledAddressLineEmphasized>
                Al. Jana Pawła II 27
                <br />
                00-867 {t("footer.warsaw")}
                <br />
                <br />
                <StyledMailLink href={`mailto:${CompanyInfo.email}`}>
                    {CompanyInfo.email}
                </StyledMailLink>
                <br />
            </StyledContactField>
            <StyledCompanyIds>
                NIP: 5272974670
                <br />
                KRS: 0000927509
                <br />
            </StyledCompanyIds>
        </StyledCompanyInfo>
    )
}

export default CompanyInfoBox
