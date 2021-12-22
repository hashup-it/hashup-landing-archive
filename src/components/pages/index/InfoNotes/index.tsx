import { FC } from "react"
import { StyledColoredText } from "components/shared/utils.styles"
import { randomInt } from "util/math"
import {
    StyledNote,
    StyledNoteBubble,
    StyledNoteContent,
    StyledNoteLabel,
    StyledNotesArea,
} from "./index.styles"
import { useTranslation } from "react-i18next"
import { StyledSectionTitle, StyledSectionWrapper } from "components/shared/section.styles"

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
        <StyledSectionWrapper>
            <StyledSectionTitle>
                <StyledColoredText>{t("info-notes.header-def")}</StyledColoredText>
                {t("info-notes.header-form")}
            </StyledSectionTitle>
            <StyledNotesArea>
                <Note
                    icon={"assets/icons/info-bubble-1.svg"}
                    label={
                        <>
                            <StyledColoredText>{t("info-notes.note1-invest")}</StyledColoredText>
                            {t("info-notes.note1-games")}
                        </>
                    }
                    content={t("info-notes.note1-content")}
                />
                <Note
                    icon={"assets/icons/info-bubble-2.svg"}
                    label={
                        <>
                            <StyledColoredText>{t("info-notes.note2-decentralised")}</StyledColoredText>
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
                            <StyledColoredText>{t("info-notes.note3-independent")}</StyledColoredText>
                        </>
                    }
                    content={t("info-notes.note3-content")}
                />
            </StyledNotesArea>
        </StyledSectionWrapper>
    )
}

export default InfoNotes
