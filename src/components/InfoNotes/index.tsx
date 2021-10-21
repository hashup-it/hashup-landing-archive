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
            <ColoredText>DEFInitife</ColoredText> edition of License Carrier
        </SectionHeader>
        <StyledNotesArea>
            <Note
                label={
                    <>
                        <ColoredText>Earn liquidity</ColoredText> on your own game
                    </>
                }
                content="Earn money by speculating with your own game."
            />
            <Note
                label={
                    <>
                        <ColoredText>Decentralized</ColoredText> distributor
                    </>
                }
                content="Earn money by speculating with your own game."
            />
            <Note
                label={
                    <>
                        Make yourself<ColoredText> independent</ColoredText>
                    </>
                }
                content="Earn money by speculating with your own game."
            />
            <Note
                label={
                    <>
                        <ColoredText>Decentralized</ColoredText> distributor
                    </>
                }
                content="Earn money by speculating with your own game."
            />
        </StyledNotesArea>
    </StyledInfoNotes>
)
