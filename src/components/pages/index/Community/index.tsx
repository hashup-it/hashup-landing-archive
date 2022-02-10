import { StyledColoredText } from "components/shared/utils.styles"
import { StyledSocialArea, StyledSection } from "./index.styles"
import { FC } from "react"
import { assetsUrl, SocialMediaUrls } from "config"
import Image from "next/image"
import BlockButton from "components/shared/BlockButton"

const SocialBox: FC<{ socialName: string; href: string; iconSrc: string }> = ({
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
                socialName="Telegram"
                href={SocialMediaUrls.telegram}
            />
            <SocialBox
                iconSrc={assetsUrl(`community/discord.svg`)}
                socialName="Discord"
                href={SocialMediaUrls.discord}
            />
            <SocialBox
                iconSrc={assetsUrl(`community/twitter.svg`)}
                socialName="Twitter"
                href={SocialMediaUrls.twitter}
            />
            <SocialBox
                iconSrc={assetsUrl(`community/linkedin.svg`)}
                socialName="LinkedIn"
                href={SocialMediaUrls.linkedIn}
            />
        </StyledSocialArea>
    </StyledSection>
)

export default Community
