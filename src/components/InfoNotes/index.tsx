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
                <ColoredText>{t("infonotes-header-def")}</ColoredText>
                {t("infonotes-header-form")}
            </SectionHeader>
            <StyledNotesArea>
                <Note
                    icon={"assets/icons/info-bubble-1.svg"}
                    label={
                        <>
                            <ColoredText>{t("infonotes-note1-invest")}</ColoredText>
                            {t("infonotes-note1-games")}
                        </>
                    }
                    content={t("infonotes-note1-content")}
                />
                <Note
                    icon={"assets/icons/info-bubble-2.svg"}
                    label={
                        <>
                            <ColoredText>{t("infonotes-note2-decentralised")}</ColoredText>
                            {t("infonotes-note2-distribution")}
                        </>
                    }
                    content={t("infonotes-note2-content")}
                />

                <Note
                    icon={"assets/icons/info-bubble-3.svg"}
                    label={
                        <>
                            {t("infonotes-note3-become")}
                            <ColoredText>{t("infonotes-note3-independent")}</ColoredText>
                        </>
                    }
                    content={t("infonotes-note3-content")}
                />
            </StyledNotesArea>
        </StyledInfoNotes>
    )
}

export default InfoNotes
