import { SocialMediaEnum, PersonInterface, RoleEnum } from "./PersonBox/interfaces"
import PersonBox from "./PersonBox"

export const coreTeam: PersonInterface[] = [
    {
        name: "Szymon Jankowski",
        localeKey: "szymon-jankowski",
        avatarImg: require("/public/assets/home/team-avatars/szymon_jankowski.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/jankowskiszymon/",
            },
            {
                type: SocialMediaEnum.twitter,
                url: "https://twitter.com/blockszymon",
            },
        ],
    },
    {
        name: "Filip Szydłowski",
        localeKey: "filip-szydlowski",
        avatarImg: require("/public/assets/home/team-avatars/filip_szydlowski.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/filip-szydlowski/",
            },
        ],
    },
    {
        name: "Tomasz Fiema",
        localeKey: "tomasz-fiema",
        avatarImg: require("/public/assets/home/team-avatars/tomasz_fiema.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/tomaszfiema/",
            },
            {
                type: SocialMediaEnum.dribble,
                url: "https://dribbble.com/fiematomasz",
            },
        ],
    },
    {
        name: "Cezary Dobrowolski",
        localeKey: "cezary-dobrowolski",
        avatarImg: require("/public/assets/home/team-avatars/cezary_dobrowolski.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/cezary-krzysztof-dobrowolski-b0a2001a5/",
            },
        ],
    },
    {
        name: "Szymon Fiałkowski",
        localeKey: "szymon-fialkowski",
        avatarImg: require("/public/assets/home/team-avatars/szymon_fialkowski.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/szymon-fia%C5%82kowski-ab049355/",
            },
        ],
    },
    {
        name: "Maciej Czarkowski",
        localeKey: "maciej-czarkowski",
        avatarImg: require("/public/assets/home/team-avatars/maciej_czarkowski.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/maciej-czarkowski/"
            }
        ]
    }
]

export const team: PersonInterface[] = [
    {
        name: "Damian Sarnecki",
        localeKey: "damian-sarnecki",
        avatarImg: require("/public/assets/home/team-avatars/damian_sarnecki.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/damian-sarnecki/",
            },
            {
                type: SocialMediaEnum.github,
                url: "https://github.com/damiansarnecki",
            },
        ],
    },
    {
        name: "Robert Dziubek",
        localeKey: "robert-dziubek",
        avatarImg: require("/public/assets/home/team-avatars/robert_dziubek.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/rdziubek",
            },
            {
                type: SocialMediaEnum.github,
                url: "https://github.com/rdziubek",
            },
        ],
    },
    {
        name: "Jakub Jaworski",
        localeKey: "jakub-jaworski",
        avatarImg: require("/public/assets/home/team-avatars/jakub_jaworski.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/jakub-jaworski-1189961aa/",
            },
            {
                type: SocialMediaEnum.twitter,
                url: "https://twitter.com/Kuba_Jaworski",
            },
        ],
    },
    {
        name: "Jakub Stebel",
        localeKey: "jakub-stebel",
        avatarImg: require("/public/assets/home/team-avatars/jakub_stebel.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "http://www.linkedin.com/in/jakub-stebel-a20279224",
            },
        ],
    },
    {
        name: "Patryk Rossa",
        localeKey: "patryk-rossa",
        avatarImg: require("/public/assets/home/team-avatars/patryk_rossa.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/patrykrossa/",
            },
        ],
    },
    {
        name: "Kamil Kaminski",
        localeKey: "kamil-kaminski",
        avatarImg: require("/public/assets/home/team-avatars/kamil_kaminski.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/kamil-kami%C5%84ski-573ba3226/",
            },
        ],
    },
]

export const advisors: PersonInterface[] = [
    {
        name: "dr Tomasz R. Smus",
        wordsBeforeNameBreak: 3,
        localeKey: "tomasz-smus",
        avatarImg: require("/public/assets/home/team-avatars/tomasz_smus.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/trsmus/",
            },
        ],
    },
    {
        name: "prof. Krzysztof Piech",
        wordsBeforeNameBreak: 2,
        localeKey: "krzysztof-piech",
        avatarImg: require("/public/assets/home/team-avatars/krzysztof_piech.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/kpiech/",
            },
            {
                type: SocialMediaEnum.wikipedia,
                url: "https://pl.wikipedia.org/wiki/Krzysztof_Piech",
            },
        ],
    },
    {
        name: "Paweł Łaskarzewski",
        localeKey: "pawel-laskarzewski",
        avatarImg: require("/public/assets/home/team-avatars/pawel_laskarzewski.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://pl.linkedin.com/in/pawellaskarzewski",
            },
            {
                type: SocialMediaEnum.twitter,
                url: "https://twitter.com/PawelSynapse",
            },
        ],
    },
    {
        name: "Marcin Wenus",
        localeKey: "marcin-wenus",
        avatarImg: require("/public/assets/home/team-avatars/marcin_wenus.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://pl.linkedin.com/in/marcin-wenus-00029b51",
            },
        ],
    },
    {
        name: "Krzysztof Chmielewski",
        localeKey: "krzysztof-chmielewski",
        avatarImg: require("/public/assets/home/team-avatars/krzysztof_chmielewski.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://www.linkedin.com/in/krzysztof-chmielewski-a87b5a8a/",
            },
        ],
    },
    {
        name: "Tomasz Kopera",
        localeKey: "tomasz-kopera",
        avatarImg: require("/public/assets/home/team-avatars/tomasz_kopera.png"),
        socialMedia: [
            {
                type: SocialMediaEnum.linkedIn,
                url: "https://pl.linkedin.com/in/tomasz-kopera-856b7a6",
            },
            {
                type: SocialMediaEnum.twitter,
                url: "https://twitter.com/tomkopera",
            },
        ],
    },
]

export const teamItems: JSX.Element[] = [
    ...coreTeam.map((item, _) => (
        <PersonBox
            key={item.name}
            avatarImg={item.avatarImg}
            name={item.name}
            localeKey={item.localeKey}
            socialMedia={item.socialMedia}
            role={RoleEnum.coreTeam}
            wordsBeforeNameBreak={item.wordsBeforeNameBreak}
        />
    )),
    ...team.map((item, _) => (
        <PersonBox
            key={item.name}
            avatarImg={item.avatarImg}
            name={item.name}
            localeKey={item.localeKey}
            socialMedia={item.socialMedia}
            role={RoleEnum.team}
            wordsBeforeNameBreak={item.wordsBeforeNameBreak}
        />
    )),
]

export const advisorsItems: JSX.Element[] = [
    ...advisors.map((item, _) => (
        <PersonBox
            key={item.name}
            avatarImg={item.avatarImg}
            name={item.name}
            localeKey={item.localeKey}
            socialMedia={item.socialMedia}
            role={RoleEnum.advisor}
            wordsBeforeNameBreak={item.wordsBeforeNameBreak}
        />
    )),
]
