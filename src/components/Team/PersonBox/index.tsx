import { FC } from "react"
import {
    Avatar,
    Description,
    Function,
    Name,
    PersonContainer,
    PersonDescription,
    PersonDescriptionContent,
    Separator,
    SocialMedia,
    StyledIconA,
} from "./index.style"
import { SocialMediaEnum, PersonInterface } from "./interfaces"
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
            <NextImage width={20} height={20} quality={20} src={`/assets/icons/${icon}`} alt={`${title} - ${name}`} />
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
    readonly outline?: boolean
}

const PersonBox: FC<PersonProps> = ({ avatarFilename, localeKey, name, socialMedia, outline }) => {
    const { t } = useTranslation()

    return (
        <PersonContainer>
            <PersonDescription outline={outline}>
                <PersonDescriptionContent>
                    <Avatar src={`assets/team-avatars/${avatarFilename}`} />
                    <Function>
                        <ColoredText>{t(`${localeKey}-title`).toUpperCase()}</ColoredText>
                    </Function>
                    <Name>{name}</Name>
                    <Description>{t(localeKey)}</Description>
                    <Separator />
                    <SocialMedia>
                        {socialMedia.map((item, index) => (
                            <SocialMediaIcon
                                key={index}
                                name={name}
                                url={item.url}
                                type={item.type}
                            />
                        ))}
                    </SocialMedia>
                </PersonDescriptionContent>
            </PersonDescription>
        </PersonContainer>
    )
}

export default PersonBox
