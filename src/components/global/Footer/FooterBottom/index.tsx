import { Documents } from "config"
import {
    StyledCopyright,
    StyledDocumentGroup,
    StyledFooterBottom,
    StyledFooterLink,
} from "./index.styles"

const CURRENT_YEAR: number = new Date().getFullYear()

const FooterBottom = () => {
    return (
        <StyledFooterBottom>
            <div className="content">
                <StyledCopyright>
                    Copyright © {CURRENT_YEAR} by HashUp. All Rights Reserved.
                </StyledCopyright>
                <StyledDocumentGroup>
                    <StyledFooterLink
                        href={Documents.lightpaper}
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        Lightpaper
                    </StyledFooterLink>
                    <StyledFooterLink
                        href={Documents.termsAndConditions}
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        Terms & Conditions
                    </StyledFooterLink>
                    <StyledFooterLink
                        href={Documents.privacyPolicy}
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        Privacy Policy
                    </StyledFooterLink>
                    <StyledFooterLink
                        href={Documents.airdropTermsOfUse}
                        target="_blank"
                        rel="noopener noreferer"
                    >
                        Airdrop Terms of Use
                    </StyledFooterLink>
                </StyledDocumentGroup>
            </div>
        </StyledFooterBottom>
    )
}

export default FooterBottom
