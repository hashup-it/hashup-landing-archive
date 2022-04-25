import { FC } from "react"
import { StyledItemsBox } from "./index.styles"
import Item, { ItemProps } from "./Item"
import SectionType2 from "../SectionType2"
import { Trans, useTranslation } from "react-i18next"

const Faq: FC<{ readonly localeKey: string; readonly numberOfItems: number }> = ({
    localeKey,
    numberOfItems,
}) => {
    const { t } = useTranslation()

    return (
        <SectionType2 title="FAQ" anchor="faq">
            <StyledItemsBox>
                {Array.from(Array(numberOfItems).keys()).map((_, index) => (
                    <Item
                        key={index}
                        question={t(`${localeKey}.${index}.q`)}
                        answer={
                            // It might be done better but for now it just works
                            <div
                                dangerouslySetInnerHTML={{ __html: t(`${localeKey}.${index}.a`) }}
                            />
                        }
                    />
                ))}
            </StyledItemsBox>
        </SectionType2>
    )
}

export default Faq
