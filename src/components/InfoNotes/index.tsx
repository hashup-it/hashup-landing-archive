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
                <ColoredText>{t("infonotes-header1")}</ColoredText>
                {t("infonotes-header2")}
            </SectionHeader>
            <StyledNotesArea>
                <Note
                    icon={'assets/icons/info-bubble-1.svg'}
                    label={
                        <>
                            <ColoredText>{t("infonotes-note11")}</ColoredText>
                            {t("infonotes-note12")}
                        </>
                    }
                    content={t("infonotes-note1-content")}
                />
                <Note
                    icon={'assets/icons/info-bubble-2.svg'}
                    label={
                        <>
                            <ColoredText>{t("infonotes-note21")}</ColoredText>
                            {t("infonotes-note22")}
                        </>
                    }
                    content={t("infonotes-note2-content")}
                />

                <Note
                    icon={'assets/icons/info-bubble-3.svg'}
                    label={
                        <>
                            {t("infonotes-note31")}
                            <ColoredText>{t("infonotes-note32")}</ColoredText>
                        </>
                    }
                    content={t("infonotes-note3-content")}
                />
            </StyledNotesArea>
        </StyledInfoNotes>
    )
}

export default InfoNotes
