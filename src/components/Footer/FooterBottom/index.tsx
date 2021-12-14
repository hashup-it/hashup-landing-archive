import { Documents } from "config";
import { StyledCopyright, StyledDocumentGroup, StyledFooterBottom, StyledFooterLink } from "./index.styles";

const CURRENT_YEAR = new Date().getFullYear()

const FooterBottom = () => {
    return (
        <StyledFooterBottom>
            <StyledCopyright>Copyright © {CURRENT_YEAR} by HashUp. All Rights Reserved.</StyledCopyright>
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
        </StyledFooterBottom>
    );
}
 
export default FooterBottom;