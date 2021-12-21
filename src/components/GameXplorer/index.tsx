import SectionType1 from "components/SectionType1"
import { ColoredText } from "components/Shared"
import { assetsUrl } from "config"
import { StyledButton1 } from "__styles__/shared"

import { StyledImagesBox } from "./index.styles"
import { StyledMainImage } from "components/SectionType1/index.styles"

const ImagesBox = () => (
    <StyledImagesBox>
        <StyledMainImage
            className="main"
            src={assetsUrl("game-xplorer/website-preview.png")}
            alt="GameXplorer website preview"
        />
        <img className="red-dots-1" src={assetsUrl("game-xplorer/red-dots-1.png")} alt="" />
        <img className="red-dots-2" src={assetsUrl("game-xplorer/red-dots-2.png")} alt="" />
    </StyledImagesBox>
)

const GameXplorer = () => (
    <SectionType1
        anchor="game-xplorer"
        label={
            <>
                Game<ColoredText>Xplorer</ColoredText>.io
            </>
        }
        title={
            <>
                First blockchain explorer for the gamers<ColoredText>!</ColoredText>
            </>
        }
        paragraph={
            <>
                Cartridge with a video game on the Blockchain. You must have one piece of the game
                to play. Freely shape the rules of the secondary market as a Game Creator. Liquidity
                pools with video games!
            </>
        }
        button={
            <StyledButton1>
                More about <ColoredText>GameXplorer</ColoredText>
            </StyledButton1>
        }
        bgImgSrc={assetsUrl("game-xplorer/lying-website.png")}
        imagesBox={<ImagesBox />}
    />
)

export default GameXplorer
