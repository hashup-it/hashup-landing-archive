import Image from "next/image"
import { FC } from "react"
import { StyledItem } from "./index.styles"
import checkedCircleSvg from "/public/assets/random-icons/checked-circle.svg"

const Item: FC<{ readonly text: JSX.Element }> = ({ text }) => (
    <StyledItem>
        <div className="icon-wrapper">
            <Image src={checkedCircleSvg} alt="" />
        </div>
        {text}
    </StyledItem>
)

export default Item
