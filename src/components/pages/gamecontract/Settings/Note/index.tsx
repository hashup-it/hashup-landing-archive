import { FC } from "react"
import { StyledNoteBox } from "./index.styles"
import Image from "next/image"
import { assetsUrl } from "config"
import { Trans } from "react-i18next"

const Note: FC<{ readonly index: number }> = ({ index }) => (
    <StyledNoteBox>
        <div className="icon">
            <Image
                src={assetsUrl("random-icons/checked-circle.svg")}
                alt=""
                width={65}
                height={65}
            />
        </div>
        <h3>
            <Trans i18nKey={`gamecontract.settings.notes.${index}.title`} />
        </h3>
        <p>
            <Trans i18nKey={`gamecontract.settings.notes.${index}.paragraph`} />
        </p>
    </StyledNoteBox>
)

export default Note
