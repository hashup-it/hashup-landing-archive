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
import { Trans, useTranslation } from "react-i18next"
import { StyledSectionTitle, StyledSectionWrapper } from "components/shared/section.styles"

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

const InfoNotes = () => {
    const { t } = useTranslation()

    return (
        <StyledSectionWrapper>
            <StyledSectionTitle>
                <StyledColoredText>{t("info-notes.header-def")}</StyledColoredText>
                <Trans i18nKey={"info-notes.header-form"} />
            </StyledSectionTitle>
            <StyledNotesArea>
                <Note
                    icon={"assets/icons/info-bubble-1.svg"}
                    label={
                        <>
                            <StyledColoredText>{t("info-notes.note-1.title.1")}</StyledColoredText>{" "}
                            {t("info-notes.note-1.title.2")}
                            <StyledColoredText>.</StyledColoredText>
                        </>
                    }
                    content={<Trans i18nKey={"info-notes.note-1.content"} />}
                />
                <Note
                    icon={"assets/icons/info-bubble-2.svg"}
                    label={
                        <>
                            {t("info-notes.note-2.title.1")}
                            <br />
                            <StyledColoredText>{t("info-notes.note-2.title.2")}</StyledColoredText>.
                        </>
                    }
                    content={<Trans i18nKey={"info-notes.note-2.content"} />}
                />

                <Note
                    icon={"assets/icons/info-bubble-3.svg"}
                    label={
                        <>
                            <Trans i18nKey={"info-notes.note-3.title.1"} />{" "}
                            <StyledColoredText>{t("info-notes.note-3.title.2")}</StyledColoredText>!
                        </>
                    }
                    content={t("info-notes.note-3.content")}
                />
            </StyledNotesArea>
        </StyledSectionWrapper>
    )
}

export default InfoNotes
