import { assetsUrl, SocialMediaUrls } from "config"
import Image from "next/image"
import { FC } from "react"
import { Trans } from "react-i18next"
import BlockButton from "../BlockButton"
import { StyledSectionTitle } from "../section.styles"
import { StyledSection } from "./index.styles"

export const SocialBox: FC<{ socialName: string; href: string; iconSrc: string }> = ({
    socialName,
    href,
    iconSrc,
}) => (
    <BlockButton
        button={{
            icon: (
                <Image src={iconSrc} alt={`${socialName} HashUp`} width={30} height={30} priority />
            ),
            title: socialName,
            label: "Announcements",
        }}
        link={{
            href: href,
            title: socialName,
        }}
    />
)

export const DiscordBlockButton = () => (
    <SocialBox
        iconSrc={assetsUrl(`community/discord.svg`)}
        socialName="Discord"
        href={SocialMediaUrls.discord}
    />
)

export const TelegramBlockButton = () => (
    <SocialBox
        iconSrc={assetsUrl(`community/telegram.svg`)}
        socialName="Telegram"
        href={SocialMediaUrls.telegram}
    />
)

export const TwitterBlockButton = () => (
    <SocialBox
        iconSrc={assetsUrl(`community/twitter.svg`)}
        socialName="Twitter"
        href={SocialMediaUrls.twitter}
    />
)

export const LinkedInBlockButton = () => (
    <SocialBox
        iconSrc={assetsUrl(`community/linkedin.svg`)}
        socialName="LinkedIn"
        href={SocialMediaUrls.linkedIn}
    />
)

const Community = () => (
    <StyledSection>
        <div className="first">
            <h3>
                <Trans i18nKey="shared.community.label" />
            </h3>
            <StyledSectionTitle>
                <Trans i18nKey="shared.community.title" />
            </StyledSectionTitle>
        </div>
        <div className="second">
            <TelegramBlockButton />
            <DiscordBlockButton />
        </div>
    </StyledSection>
)

export default Community
