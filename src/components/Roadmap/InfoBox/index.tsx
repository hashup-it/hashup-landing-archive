import { FC } from "react"
import { InfoBoxInterface } from "./interfaces"
import {
    StyledWrapper,
    StyledBullet,
    StyledBulletsList,
    StyledInfoBox,
    StyledLabel,
} from "./infobox.styles"

interface Props extends InfoBoxInterface {
    readonly highlighted: boolean
}

const InfoBox: FC<Props> = ({ highlighted, label, bullets }) => (
    <StyledWrapper>
        <StyledInfoBox highlighted={highlighted}>
            <StyledLabel>{label}</StyledLabel>
            <StyledBulletsList>
                {bullets.map((item, index) => (
                    <StyledBullet key={index} isDone={item.isDone} bold={item.bold}>
                        <div className="icon" />
                        <div className="content">{item.content}</div>
                    </StyledBullet>
                ))}
            </StyledBulletsList>
        </StyledInfoBox>
    </StyledWrapper>
)

export default InfoBox
