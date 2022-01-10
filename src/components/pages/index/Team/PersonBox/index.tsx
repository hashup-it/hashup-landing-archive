import { FC } from "react"
import {
    StyledAvatarWrapper,
    StyledDescription,
    StyledRole,
    StyledNameBox,
    StyledPersonContainer,
    StyledContent,
    StyledSocialMediaBox,
    StyledIconA,
} from "./index.style"
import { SocialMediaEnum, PersonInterface, RoleEnum } from "./interfaces"
import { StyledColoredText } from "components/shared/utils.styles"
import { useTranslation } from "react-i18next"
import { assetsUrl, SocialMediaIcons } from "config"
import { useSplitText } from "./logic"
import Image from "next/image"

interface SocialMediaIconProps {
    readonly type: SocialMediaEnum
    readonly url: string
    readonly name: string
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ name, type, url }) => {
    const Icon: FC<{ src: string; title: string }> = ({ src, title }) => (
        <StyledIconA
            href={url}
            title={`${title} - ${name}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image src={src} alt={`${title} - ${name}`} width={16} height={16} />
        </StyledIconA>
    )

    switch (type) {
        case SocialMediaEnum.wikipedia:
            return <Icon title="Wikipedia" src={SocialMediaIcons.wikipedia} />
        case SocialMediaEnum.linkedIn:
            return <Icon title="LinkedIn" src={SocialMediaIcons.linkedin} />
        case SocialMediaEnum.twitter:
            return <Icon title="Twitter" src={SocialMediaIcons.twitter} />
        case SocialMediaEnum.github:
            return <Icon title="Github" src={SocialMediaIcons.github} />
        case SocialMediaEnum.dribble:
            return <Icon title="Dribble" src={SocialMediaIcons.dribble} />
        default:
            return <></>
    }
}

interface PersonProps extends PersonInterface {
    readonly role: RoleEnum
}

const PersonBox: FC<PersonProps> = ({
    avatarFilename,
    localeKey,
    name,
    socialMedia,
    role,
    wordsBeforeNameBreak,
}) => {
    const { t } = useTranslation()
    const { firstLine, secondLine } = useSplitText(
        name,
        wordsBeforeNameBreak ? wordsBeforeNameBreak : 1
    )

    return (
        <StyledPersonContainer personRole={role}>
            <div className="outline">
                <StyledContent>
                    <StyledAvatarWrapper>
                        <Image
                            src={assetsUrl(`team-avatars/${avatarFilename}`)}
                            alt={`${name} avatar`}
                            quality={85}
                            width={120}
                            height={120}
                        />
                    </StyledAvatarWrapper>
                    <StyledRole>
                        <StyledColoredText>
                            {t(`team.team-members.${localeKey}.role`).toUpperCase()}
                        </StyledColoredText>
                    </StyledRole>
                    <StyledNameBox>
                        <div className="line">{firstLine}</div>
                        <div className="line">{secondLine}</div>
                    </StyledNameBox>
                    <StyledDescription>
                        {t(`team.team-members.${localeKey}.description`)}
                    </StyledDescription>
                    <StyledSocialMediaBox>
                        {socialMedia.map((item, index) => (
                            <SocialMediaIcon
                                key={index}
                                name={name}
                                url={item.url}
                                type={item.type}
                            />
                        ))}
                    </StyledSocialMediaBox>
                </StyledContent>
            </div>
        </StyledPersonContainer>
    )
}

export default PersonBox
