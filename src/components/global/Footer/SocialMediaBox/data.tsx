import { SocialMediaIcons, SocialMediaUrls } from "config"

interface FooterSocialInterface {
    icon: string
    destination: string
}

export const footerSocialsData: FooterSocialInterface[] = [
    {
        icon: SocialMediaIcons.linkedin,
        destination: SocialMediaUrls.linkedIn,
    },
    {
        icon: SocialMediaIcons.telegram,
        destination: SocialMediaUrls.telegram,
    },
    {
        icon: SocialMediaIcons.twitter,
        destination: SocialMediaUrls.twitter,
    },
    {
        icon: SocialMediaIcons.facebook,
        destination: SocialMediaUrls.facebook,
    },
    {
        icon: SocialMediaIcons.instagram,
        destination: SocialMediaUrls.instagram,
    },
    {
        icon: SocialMediaIcons.discord,
        destination: SocialMediaUrls.discord,
    },
]
