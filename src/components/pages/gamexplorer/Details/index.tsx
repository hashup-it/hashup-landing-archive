import SectionType1 from "components/shared/SectionType1"
import { Trans } from "react-i18next"

const Images = () => <div>siema</div>

const Details = () => (
    <SectionType1
        anchor="details"
        title={<Trans i18nKey="gamexplorer.details.title" />}
        paragraph={<Trans i18nKey="gamexplorer.details.paragraph" />}
        imagesBox={<Images />}
    ></SectionType1>
)

export default Details
