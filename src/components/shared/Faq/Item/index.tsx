import { StyledItem, StyledHeader } from "./index.styles"
import { FC, useState } from "react"
import Collapsible from "react-collapsible"
import { assetsUrl } from "config"
import Image from "next/image"

const Header: FC<{ readonly question: string; readonly isOpen: boolean }> = ({
    question,
    isOpen,
}) => (
    <StyledHeader isOpen={isOpen}>
        <h3>{question}</h3>
        <div className="icon">
            <Image
                src={assetsUrl("random-icons/expand-arrow-circle.svg")}
                alt=""
                width={28}
                height={28}
            />
        </div>
    </StyledHeader>
)

export interface ItemProps {
    readonly question: string
    readonly answer: string
}

const Item: FC<ItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <StyledItem>
            <Collapsible
                trigger={<Header question={question} isOpen={isOpen} />}
                onOpening={() => setIsOpen(true)}
                onClosing={() => setIsOpen(false)}
                transitionTime={200}
            >
                <p className="answer">{answer}</p>
            </Collapsible>
        </StyledItem>
    )
}

export default Item
