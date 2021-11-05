import { FC } from "react"
import { InfoBoxInterface } from "./interfaces"
import { useTranslation } from "react-i18next"
import { StyledBullet, StyledBulletsList, StyledInfoBox, StyledLabel } from "./infobox.styles"
import { StyledWrapper } from './infobox.styles'


interface InfoBoxProps extends InfoBoxInterface {
    readonly highlighted: boolean
}

const InfoBox: FC<InfoBoxProps> = ({ highlighted, labelLocale, bullets }) => {
    const { t } = useTranslation()

    return (
        <StyledWrapper>
            <StyledInfoBox highlighted={highlighted}>
                <StyledLabel>{t(labelLocale)}</StyledLabel>
                <StyledBulletsList>
                    {bullets.map(item => (
                        <StyledBullet key={item.contentLocale} isDone={item.isDone} bold={item.bold}>
                            <div className="icon" />
                            <div className="content">{t(item.contentLocale)}</div>
                        </StyledBullet>
                    ))}
                </StyledBulletsList>
            </StyledInfoBox>
        </StyledWrapper>
    )
}

export default InfoBox
