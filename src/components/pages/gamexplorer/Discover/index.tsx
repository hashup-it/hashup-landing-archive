import SectionType1 from "components/shared/SectionType1"
import { Trans } from "react-i18next"

const Images = () => <div>siema</div>

const Discover = () => (
    <SectionType1
        anchor="discover"
        title={<Trans i18nKey="gamexplorer.discover.title" />}
        paragraph={<Trans i18nKey="gamexplorer.discover.paragraph" />}
        imagesBox={<Images />}
        reversedLayout
    ></SectionType1>
)

export default Discover
