import { StyledColoredText } from "components/shared/utils.styles"
import { assetsUrl } from "config"
import { StyledButton1 } from "components/shared/buttons.styles"
import SectionType1 from "components/pages/index/SectionType1"
import { StyledImagesBox } from "./index.styles"
import { StyledMainImage } from "components/pages/index/SectionType1/index.styles"

const ImagesBox = () => (
    <StyledImagesBox>
        <StyledMainImage
            className="main"
            src={assetsUrl("game-cap/website-preview.png")}
            alt="GameCap website preview"
        />
        <img className="red-dots" src={assetsUrl("game-cap/red-dots.png")} alt="" />
        <div className="flare" />
    </StyledImagesBox>
)

const GameCap = () => (
    <SectionType1
        anchor="game-cap"
        label={
            <>
                Game<StyledColoredText>Cap</StyledColoredText>.io
            </>
        }
        title={
            <>
                Video Games <br /> Market Cap Listing<StyledColoredText>.</StyledColoredText>
            </>
        }
        paragraph={
            <>
                Imagine <b>CoinMarketCap with video games</b> that lets you list their prices.
                Ranking games based on their true value!
                <b>Nothing shows the quality of a game better than its true price.</b>
            </>
        }
        button={
            <StyledButton1>
                More about <StyledColoredText>GameCap</StyledColoredText>
            </StyledButton1>
        }
        bgImgSrc={assetsUrl("game-cap/lying-website.png")}
        imagesBox={<ImagesBox />}
    />
)

export default GameCap
