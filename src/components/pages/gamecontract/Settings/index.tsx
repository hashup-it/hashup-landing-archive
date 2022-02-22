import { StyledNotesBox } from "./index.styles"
import SectionType2 from "components/shared/SectionType2"
import { Trans } from "react-i18next"
import Note from "./Note"

const Settings = () => (
    <SectionType2
        title={<Trans i18nKey="gamecontract.settings.title" />}
        paragraph={<Trans i18nKey="gamecontract.settings.paragraph" />}
    >
        <StyledNotesBox>
            <Note index={0} />
            <Note index={1} />
            <Note index={2} />
        </StyledNotesBox>
    </SectionType2>
)

export default Settings
