import { useScrollPercentage } from "react-scroll-percentage"
import { useWindowWidth } from "@react-hook/window-size/throttled"
import { useEffect, useMemo, useState } from "react"

interface HookProps<T> {
    readonly onScroll: (percentage: number) => T
    readonly minWindowWidth: number
}

export function useParallax<Type>({ onScroll, minWindowWidth }: HookProps<Type>) {
    const [ref, percentage] = useScrollPercentage()
    const windowWidth = useWindowWidth({ fps: 5 })
    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    useEffect(() => {
        setIsDisabled(windowWidth < minWindowWidth)
    }, [windowWidth, minWindowWidth])

    const result: Type | undefined = useMemo(() => {
        if (!isDisabled) {
            return onScroll(percentage)
        }
        return undefined
    }, [percentage, onScroll, isDisabled])

    return {
        ref,
        result,
        isDisabled,
    }
}

export const getParallaxValue = (
    percentage: number,
    startValue: number,
    endValue: number,
    fullOnPercantage: number = 100
): number => {
    const delta = endValue - startValue
    const step = delta / fullOnPercantage

    if (startValue <= endValue) {
        const result = step * percentage * 100 + startValue

        if (result > endValue) {
            return endValue
        }
        return result
    } else {
        const result = startValue + step * percentage * 100

        if (result < endValue) {
            return endValue
        }

        return result
    }
}
