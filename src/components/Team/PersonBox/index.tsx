import { FC } from "react"
import {
    Avatar,
    StyledDescription,
    Function,
    StyledName,
    StyledPersonContainer,
    StyledContent,
    StyledSocialMediaBox,
    StyledIconA,
} from "./index.style"
import { SocialMediaEnum, PersonInterface, RoleEnum } from "./interfaces"
import { ColoredText } from "../../Shared"
import { useTranslation } from "react-i18next"
import NextImage from "next/image"

interface SocialMediaIconProps {
    readonly type: SocialMediaEnum
    readonly url: string
    readonly name: string
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ name, type, url }) => {
    const Icon: FC<{ icon: string; title: string }> = ({ icon, title }) => (
        <StyledIconA
            href={url}
            title={`${title} - ${name}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <NextImage
                width={20}
                height={20}
                quality={20}
                src={`/assets/icons/${icon}`}
                alt={`${title} - ${name}`}
            />
        </StyledIconA>
    )

    switch (type) {
        case SocialMediaEnum.wikipedia:
            return <Icon title="Wikipedia" icon="wikipedia.ico" />
        case SocialMediaEnum.linkedIn:
            return <Icon title="LinkedIn" icon="linkedin.svg" />
        default:
            return <></>
    }
}

interface PersonProps extends PersonInterface {
    readonly role: RoleEnum
}

const PersonBox: FC<PersonProps> = ({ avatarFilename, localeKey, name, socialMedia, role }) => {
    const { t } = useTranslation()

    return (
        <StyledPersonContainer personRole={role}>
            <div className="outline">
                <StyledContent>
                    <Avatar src={`assets/team-avatars/${avatarFilename}`} />
                    <Function>
                        <ColoredText>{t(`${localeKey}-title`).toUpperCase()}</ColoredText>
                    </Function>
                    <StyledName>{name}</StyledName>
                    <StyledDescription>{t(localeKey)}</StyledDescription>
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
