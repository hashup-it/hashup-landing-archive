import { FC } from 'react'
import { InfoBoxInterface } from './interfaces'
import { StyledBullet, StyledBulletsList, StyledInfoBox, StyledLabel } from './infobox.styles'

interface Props extends InfoBoxInterface {
    readonly highlighted: boolean
}

const InfoBox: FC<Props> = ({ highlighted, label, bullets }) => (
    <StyledInfoBox highlighted={highlighted}>
        <StyledLabel>{label}</StyledLabel>
        <StyledBulletsList>
<<<<<<< HEAD
            {bullets.map(item => (
                <StyledBullet key={item.content} isDone={item.isDone} bold={item.bold}>
=======
            {bullets.map((item, index) => (
                <StyledBullet
                    key={index}
                    isDone={item.isDone}
                    bold={item.bold}
                >
>>>>>>> a5eb1b35062a640f8d8bba91e88721da06e5ec8e
                    <div className="icon" />
                    <div className="content">{item.content}</div>
                </StyledBullet>
            ))}
        </StyledBulletsList>
    </StyledInfoBox>
)

export default InfoBox
