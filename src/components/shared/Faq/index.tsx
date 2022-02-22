import { FC } from "react"
import { StyledSectionTitle, StyledSectionWrapper } from "components/shared/section.styles"
import { StyledItemsBox } from "./index.styles"
import Item, { ItemProps } from "./Item"

const Faq: FC<{ readonly items: ItemProps[] }> = ({ items }) => (
    <StyledSectionWrapper>
        <StyledSectionTitle>FAQ</StyledSectionTitle>
        <StyledItemsBox>
            {items.map(item => (
                <Item key={item.question} {...item} />
            ))}
        </StyledItemsBox>
    </StyledSectionWrapper>
)

export default Faq
