import SectionType2 from "components/shared/SectionType2"
import { Trans } from "react-i18next"
import { StyledFlare, StyledItemsBox } from "./index.styles"
import Item from "./Item/Item"

const Discover = () => (
    <SectionType2
        anchor="discover"
        label={<Trans i18nKey="gamecap.discover.label" />}
        title={<Trans i18nKey="gamecap.discover.title" />}
        paragraph={<Trans i18nKey="gamecap.discover.paragraph" />}
    >
        <>
            <StyledItemsBox>
                {[...Array(4)].map((v, idx) => (
                    <Item key={idx} text={<Trans i18nKey={`gamecap.discover.items.${idx}`} />} />
                ))}
            </StyledItemsBox>
            <StyledFlare />
        </>
    </SectionType2>
)

export default Discover
