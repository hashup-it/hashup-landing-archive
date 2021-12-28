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
                    <StyledFooterLink href={Documents.termsAndConditions}>
                        Terms & Conditions
                    </StyledFooterLink>
                    <StyledFooterLink href={Documents.privacyPolicy}>
                        Privacy Policy
                    </StyledFooterLink>
                    <StyledFooterLink href={Documents.airdropTermsOfUse}>
                        Airdrop Terms of Use
                    </StyledFooterLink>
                </StyledDocumentGroup>
            </div>
        </StyledFooterBottom>
    )
}

export default FooterBottom
