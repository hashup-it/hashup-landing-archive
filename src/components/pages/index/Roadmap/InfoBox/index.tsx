import { FC } from "react"
import { BulletInterface } from "./interfaces"
import { useTranslation } from "react-i18next"
import {
    StyledBullet,
    StyledBulletsList,
    StyledInfoBox,
    StyledLabel,
    StyledWrapper,
} from "./index.styles"

interface InfoBoxProps {
    readonly highlighted: boolean
    readonly index: number
    readonly bullets: BulletInterface[]
}

const InfoBox: FC<InfoBoxProps> = ({ highlighted, bullets, index }) => {
    const { t } = useTranslation()

    return (
        <StyledWrapper>
            <StyledInfoBox highlighted={highlighted}>
                <StyledLabel>{t(`home.roadmap.boxes.${index}.label`)}</StyledLabel>
                <StyledBulletsList>
                    {bullets.map((item, i) => (
                        <StyledBullet key={i} isDone={item.isDone} bold={item.bold}>
                            <div className="icon" />
                            <div className="content">
                                {t(`home.roadmap.boxes.${index}.bullets.${i}`)}
                            </div>
                        </StyledBullet>
                    ))}
                </StyledBulletsList>
            </StyledInfoBox>
        </StyledWrapper>
    )
}

export default InfoBox
