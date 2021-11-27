import { FC } from "react"
import { SectionHeader, SectionLabel } from "../Shared/sections.styles"
import { ColoredText } from "../Shared"
import { randomInt } from "util/math"
import {
    StyledInfoNotes,
    StyledNote,
    StyledNoteBubble,
    StyledNoteContent,
    StyledNoteLabel,
    StyledNotesArea,
} from "./index.styles"
import { useTranslation } from "react-i18next"

interface NoteProps {
    readonly label: JSX.Element
    readonly content: string
    readonly icon: string
}

export const Note: FC<NoteProps> = ({ content, label, icon }) => (
    <StyledNote>
        <StyledNoteBubble icon={icon} initRotateDelay={randomInt(0, 100)}>
            <div className="icon" />
            <div className="bubble " />
        </StyledNoteBubble>
        <StyledNoteLabel>{label}</StyledNoteLabel>
        <StyledNoteContent>{content}</StyledNoteContent>
    </StyledNote>
)

const InfoNotes = () => {
    const { t } = useTranslation()

    return (
        <StyledInfoNotes>
            <SectionLabel>
                <ColoredText>game</ColoredText>change.io
            </SectionLabel>
            <SectionHeader>
                <ColoredText>{t("info-notes.header-def")}</ColoredText>
                {t("info-notes.header-form")}
            </SectionHeader>
            <StyledNotesArea>
                <Note
                    icon={"assets/icons/info-bubble-1.svg"}
                    label={
                        <>
                            <ColoredText>{t("info-notes.note1-invest")}</ColoredText>
                            {t("info-notes.note1-games")}
                        </>
                    }
                    content={t("info-notes.note1-content")}
                />
                <Note
                    icon={"assets/icons/info-bubble-2.svg"}
                    label={
                        <>
                            <ColoredText>{t("info-notes.note2-decentralised")}</ColoredText>
                            {t("info-notes.note2-distribution")}
                        </>
                    }
                    content={t("info-notes.note2-content")}
                />

                <Note
                    icon={"assets/icons/info-bubble-3.svg"}
                    label={
                        <>
                            {t("info-notes.note3-become")}
                            <ColoredText>{t("info-notes.note3-independent")}</ColoredText>
                        </>
                    }
                    content={t("info-notes.note3-content")}
                />
            </StyledNotesArea>
        </StyledInfoNotes>
    )
}

export default InfoNotes
