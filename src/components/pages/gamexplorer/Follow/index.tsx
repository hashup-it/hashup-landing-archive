import SectionType1 from "components/shared/SectionType1"
import Image from "next/image"
import { Trans } from "react-i18next"
import { StyledImagexBox } from "./index.styles"

/*const Images = () => (
    <StyledImagexBox>
        <div className="main-img">
            <Image src={} />
        </div>
    </StyledImagexBox>
)
*/

const Images = () => (
    <div>
        test
    </div>
)

const Follow = () => (
    <SectionType1
        anchor="follow"
        title={<Trans i18nKey="gamexplorer.follow.title" />}
        paragraph={<Trans i18nKey="gamexplorer.follow.paragraph" />}
        imagesBox={<Images />}
    ></SectionType1>
)

export default Follow
