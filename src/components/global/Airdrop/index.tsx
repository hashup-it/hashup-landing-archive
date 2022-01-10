import { StyledColoredText } from "components/shared/utils.styles"
import {
    StyledAirdropSection,
    StyledAnchor,
    StyledHeaderBox,
    StyledLoadingPlaceholder,
} from "./index.styles"
import { StyledLoadingSpinner } from "components/shared/loading.styles"
import dynamic from "next/dynamic"
// import { useDelayedLoading } from "hooks/lazyLoading"
import LazyLoad from "react-lazyload"

const LoadingPlaceholder = () => (
    <StyledLoadingPlaceholder>
        <StyledHeaderBox>
            Join the{" "}
            <b>
                Big <StyledColoredText>Airdrop</StyledColoredText>
            </b>{" "}
            from{" "}
            <b>
                <StyledColoredText>#</StyledColoredText>HashUp
            </b>
        </StyledHeaderBox>
        <StyledLoadingSpinner />
    </StyledLoadingPlaceholder>
)

const AidropContent = dynamic(() => import("./AirdropContent/index"), {
    loading: () => <LoadingPlaceholder />,
})

const Airdrop = () => {
    return (
        <StyledAirdropSection>
            <StyledAnchor id="airdrop" />
            <LazyLoad placeholder={<LoadingPlaceholder />} offset={450} once>
                <AidropContent />
            </LazyLoad>
        </StyledAirdropSection>
    )
}

export default Airdrop
