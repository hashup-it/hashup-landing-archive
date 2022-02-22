import { FC } from "react"
import { randomInt } from "util/math"
import {
    StyledNote,
    StyledNoteBubble,
    StyledNoteContent,
    StyledNoteLabel,
    StyledNotesArea,
} from "./index.styles"
import { Trans } from "react-i18next"
import SectionType2 from "components/shared/SectionType2"

interface NoteProps {
    readonly label: JSX.Element
    readonly content: JSX.Element
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

const Notes = () => (
    <StyledNotesArea>
        <Note
            icon={"assets/icons/info-bubble-1.svg"}
            label={<Trans i18nKey={"home.info-notes.notes.0.title"} />}
            content={<Trans i18nKey={"home.info-notes.notes.0.content"} />}
        />
        <Note
            icon={"assets/icons/info-bubble-2.svg"}
            label={<Trans i18nKey={"home.info-notes.notes.1.title"} />}
            content={<Trans i18nKey={"home.info-notes.notes.1.content"} />}
        />
        <Note
            icon={"assets/icons/info-bubble-3.svg"}
            label={<Trans i18nKey={"home.info-notes.notes.2.title"} />}
            content={<Trans i18nKey={"home.info-notes.notes.2.content"} />}
        />
    </StyledNotesArea>
)

const InfoNotes = () => (
    <SectionType2 title={<Trans i18nKey={"home.info-notes.title"} />}>
        <Notes />
    </SectionType2>
)
export default InfoNotes
