import { FC } from "react"
import { InfoBoxInterface } from "./interfaces"
import { StyledInfoBox, StyledLabel, StyledBullet, StyledBulletsList } from "./infobox.styles"

interface Props extends InfoBoxInterface {
    readonly highlighted: boolean
}

const InfoBox: FC<Props> = ({ highlighted, label, bullets }) => (
    <StyledInfoBox highlighted={highlighted}>
        <StyledLabel>{label}</StyledLabel>
        <StyledBulletsList>
            {bullets.map(item => (
                <StyledBullet isDone={item.isDone} bold={item.bold}>
                    <div className="icon" />
                    <div className="content">{item.content}</div>
                </StyledBullet>
            ))}
        </StyledBulletsList>
    </StyledInfoBox>
)

export default InfoBox
