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
import svgBubble1 from "./icons/bubble-1.svg"
import svgBubble2 from "./icons/bubble-2.svg"
import svgBubble3 from "./icons/bubble-3.svg"

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

const InfoNotes = () => (
    <StyledInfoNotes>
        <SectionLabel>
            <ColoredText>game</ColoredText>change.io
        </SectionLabel>
        <SectionHeader>
            <ColoredText>DEFInitywna</ColoredText> forma dystrybucji cyfrowej.
        </SectionHeader>
        <StyledNotesArea>
            <Note
                icon={svgBubble1}
                label={
                    <>
                        <ColoredText>Inwestuj</ColoredText> w&nbsp;gry
                    </>
                }
                content="Zarabiaj pieniądze spekulując swoją własną grą."
            />
            <Note
                icon={svgBubble2}
                label={
                    <>
                        <ColoredText>Zdecentralizowana</ColoredText> dystrybucja
                    </>
                }
                content="Wydawaj gry dzięki zdecentralizowanej dystrybucji."
            />

            <Note
                icon={svgBubble3}
                label={
                    <>
                        Stań się<ColoredText> niezależny</ColoredText>
                    </>
                }
                content="Zarabiaj więcej
                    dzięki wolnemu rynkowi."
            />
        </StyledNotesArea>
    </StyledInfoNotes>
)

export default InfoNotes
