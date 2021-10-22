import { FC } from "react"
import { SectionHeader, SectionLabel } from "../Shared/sections.styles"
import { ColoredText } from "../Shared"
import {
    StyledInfoNotes,
    StyledNotesArea,
    StyledNote,
    StyledNoteBubble,
    StyledNoteLabel,
    StyledNoteContent,
    NoteGroup,
} from "./index.styles"

export const Note: FC<{ readonly label: JSX.Element; readonly content: string }> = ({
    content,
    label,
}) => (
    <StyledNote>
        <StyledNoteBubble />
        <StyledNoteLabel>{label}</StyledNoteLabel>
        <StyledNoteContent>{content}</StyledNoteContent>
    </StyledNote>
)

export const InfoNotes = () => (
    <StyledInfoNotes>
        <SectionLabel>
            <ColoredText>game</ColoredText>change.io
        </SectionLabel>
        <SectionHeader>
            <ColoredText>DEFInitywna</ColoredText>  forma dystrybucji cyfrowej.
        </SectionHeader>
        <StyledNotesArea>

                <Note
                    label={
                        <>
                            <ColoredText>Zdobądź płynność</ColoredText> dzięki spekulacji
                        </>
                    }
                    content="Zarabiaj pieniądze spekulując swoją własną grą."
                />
                <Note
                    label={
                        <>
                            <ColoredText>Zdecentralizowana</ColoredText> dystrybucja
                        </>
                    }
                    content="Wydawaj gry dzięki zdecentralizowanej dystrybucji."
                />


                <Note
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
