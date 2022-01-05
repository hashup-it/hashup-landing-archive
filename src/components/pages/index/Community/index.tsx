import { StyledColoredText } from "components/shared/utils.styles"
import { StyledSocialBoxA, StyledSocialArea, StyledSection } from "./index.styles"
import { FC } from "react"
import { assetsUrl, SocialMediaIcons, SocialMediaUrls } from "config"
import { StyledSectionParagraph, StyledSectionTitle } from "components/shared/section.styles"

const SocialBox: FC<{ iconSrc: string; label: string; href: string }> = ({
    iconSrc,
    label,
    href,
}) => (
    <StyledSocialBoxA
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={`${label} - HashUp`}
    >
        <div className="icon-wrapper">
            <img src={iconSrc} alt={`${label} - HashUp`} />
        </div>
        <div className="label">{label}</div>
        <div className="small-label">Announcements</div>
    </StyledSocialBoxA>
)

// TODO: translation
const Community = () => (
    <StyledSection>
        <h1>
            Join our Community<StyledColoredText>.</StyledColoredText>
        </h1>
        <p>
            Follow us on a wide range of media that are up to date with all the news. Be part of
            HashUp network!
        </p>
        <StyledSocialArea>
            <SocialBox
                iconSrc={assetsUrl(`community/telegram.svg`)}
                label="Telegram"
                href={"https://t.me/HashUpChat"}
            />
            <SocialBox
                iconSrc={assetsUrl(`community/discord.svg`)}
                label="Discord"
                href={SocialMediaUrls.discord}
            />
            <SocialBox
                iconSrc={assetsUrl(`community/twitter.svg`)}
                label="Twitter"
                href={SocialMediaUrls.twitter}
            />
            <SocialBox
                iconSrc={assetsUrl(`community/linkedin.svg`)}
                label="LinkedIn"
                href={SocialMediaUrls.linkedIn}
            />
        </StyledSocialArea>
    </StyledSection>
)

export default Community
