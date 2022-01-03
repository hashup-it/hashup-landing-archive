import { StyledColoredText } from "components/shared/utils.styles"
import {
    StyledAirdropSection,
    StyledAirdropBox,
    StyledHeaderBox,
    StyledAnchor,
} from "./index.styles"
import { StyledLoadingSpinner } from "components/shared/loading.styles"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const AidropContent = dynamic(() => import("./AirdropContent/index"), {
    loading: () => <StyledLoadingSpinner />,
})

const Airdrop = () => {
    const [loadContent, setLoadContent] = useState<boolean>(false)

    useEffect(() => {
        // Lazy loading
        setTimeout(() => setLoadContent(true), 1000)
    }, [])

    return (
        <StyledAirdropSection>
            <StyledAnchor id="airdrop" />
            <StyledAirdropBox>
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
                {loadContent ? <AidropContent /> : <StyledLoadingSpinner />}
            </StyledAirdropBox>
        </StyledAirdropSection>
    )
}

export default Airdrop
