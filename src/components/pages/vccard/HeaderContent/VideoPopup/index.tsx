import { Materials } from "components/pages/media/data"
import { FC } from "react"
import { StyledPopupBox, StyledPopupWrapper, StyledVideoWrapper } from "./index.styles"

const Popup: FC<{ children: JSX.Element; close: () => void }> = ({ children, close }) => (
    <StyledPopupWrapper>
        <StyledPopupBox>
            <button className="x-button" title="Close" onClick={close}>
                X
            </button>
            {children}
        </StyledPopupBox>
    </StyledPopupWrapper>
)

const VideoPopup: FC<{ close: () => void }> = ({ close }) => (
    <Popup close={close}>
        <StyledVideoWrapper>
            <iframe
                width="560"
                height="315"
                src={`${Materials.promoVideoEmbedYoutube}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </StyledVideoWrapper>
    </Popup>
)

export default VideoPopup
