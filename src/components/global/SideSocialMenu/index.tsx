import { FC } from "react"
import Image from "next/image"
import { StyledSideSocialMenu } from "./index.styles"
import { SocialMediaIcons, SocialMediaUrls } from "config"

const SocialMediaIcon: FC<{ href: string; alt: string; src: string }> = ({ href, alt, src }) => (
    <a href={href} target="_blank" rel="noreferrer" title={`HashUp - ${alt}`}>
        <div className="icon-wrapper">
            <Image src={src} alt={alt} width={18} height={18} />
        </div>
    </a>
)

const SideMenu = () => (
    <StyledSideSocialMenu>
        <SocialMediaIcon
            href={SocialMediaUrls.linkedIn}
            src={SocialMediaIcons.linkedin}
            alt="LinkedIn"
        />
        <SocialMediaIcon
            href={SocialMediaUrls.telegram}
            src={SocialMediaIcons.telegram}
            alt="Telegram"
        />
        <SocialMediaIcon
            href={SocialMediaUrls.twitter}
            src={SocialMediaIcons.twitter}
            alt="Twitter"
        />
        <SocialMediaIcon
            href={SocialMediaUrls.facebook}
            src={SocialMediaIcons.facebook}
            alt="Facebook"
        />
        <SocialMediaIcon
            href={SocialMediaUrls.instagram}
            src={SocialMediaIcons.instagram}
            alt="Instagram"
        />
        <SocialMediaIcon
            href={SocialMediaUrls.discord}
            src={SocialMediaIcons.discord}
            alt="Discord"
        />
    </StyledSideSocialMenu>
)

export default SideMenu
