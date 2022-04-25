export enum SocialMediaEnum {
    linkedIn,
    wikipedia,
    dribble,
    twitter,
    github,
}

export enum RoleEnum {
    coreTeam,
    team,
    advisor,
}

export interface SocialMediaInterface {
    readonly type: SocialMediaEnum
    readonly url: string
}

export interface PersonInterface {
    readonly name: string
    readonly localeKey: string
    readonly socialMedia: SocialMediaInterface[]
    readonly avatarImg: string

    // Use when 'name' field is more than 2 words long
    // It's number of words (in 'name' field) before break line
    readonly wordsBeforeNameBreak?: number
}
