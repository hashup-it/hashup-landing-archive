import React, { ReactElement } from 'react'
import {
    Avatar,
    Description,
    Function,
    Name,
    PersonContainer,
    PersonDescription,
    PersonDescriptionContent,
    Separator,
    SocialMedia
} from './index.style'
import { ColoredText } from '../../Shared'

export const Person = (
    {
        imageAsset,
        title,
        name,
        description,
        socials,
        outline
    }: {
        imageAsset: string,
        title: string,
        name: string,
        description?: string,
        socials: ReactElement,
        outline?: boolean
    }
) => {
    return (
        <PersonContainer>
            <PersonDescription outline={outline}>
                <PersonDescriptionContent>
                    <Avatar src={imageAsset} />
                    <Function>
                        <ColoredText>
                            {title.toUpperCase()}
                        </ColoredText>
                    </Function>
                    <Name>
                        {name}
                    </Name>
                    <Description>
                        {description}
                    </Description>
                    <Separator />
                    <SocialMedia>
                        {socials}
                    </SocialMedia>
                </PersonDescriptionContent>
            </PersonDescription>
        </PersonContainer>
    )
}
