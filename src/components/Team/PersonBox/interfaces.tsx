export enum SocialMediaEnum {
    linkedIn,
    wikipedia
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
    readonly avatarFilename: string
}
