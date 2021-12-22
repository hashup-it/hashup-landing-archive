import styled from "styled-components"
import { Swatches } from "__styles__/consts"

export const StyledColoredText = styled.span<{ color?: string }>`
    color: ${props => props.color ?? Swatches.primary_color};
`