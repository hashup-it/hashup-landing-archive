import { FC } from "react"
import { StyledItemsBox } from "./index.styles"
import Item, { ItemProps } from "./Item"
import SectionType2 from "../SectionType2"

const Faq: FC<{ readonly items: ItemProps[] }> = ({ items }) => (
    <SectionType2 title="FAQ" anchor="faq">
        <StyledItemsBox>
            {items.map(item => (
                <Item key={item.question} {...item} />
            ))}
        </StyledItemsBox>
    </SectionType2>
)

export default Faq
