import { useState, useRef, useMemo, useEffect } from "react"
import useMouse from "@react-hook/mouse-position"
import { infoBoxesData } from "./data"

export const BOXES_PER_SLIDE: number = 2
export const BOX_WIDTH: number = 400
export const NUMBER_OF_BOXES = infoBoxesData.length
export const NUMBER_OF_SLIDES: number = NUMBER_OF_BOXES / BOXES_PER_SLIDE - 1

interface useSliderInterface {
    sliderRef: React.RefObject<HTMLDivElement>
    sliderChildRef: React.RefObject<HTMLDivElement>
    readonly isGrabbed: boolean
    readonly offsetX: number
    readonly selectedSlideId: number
    readonly onSliderMouseDown: () => void
    readonly onSliderMouseUp: () => void
    readonly jumpToSlide: (slide: number) => void
}

const useSlider = (): useSliderInterface => {
    const sliderRef = useRef<HTMLDivElement>(null)
    const sliderChildRef = useRef<HTMLDivElement>(null)
    const mouse = useMouse(sliderRef, { fps: 100, enterDelay: 50 })
    const [selectedSlideId, selectSlideById] = useState<number>(0)
    const [isGrabbed, setIsGrabbed] = useState<boolean>(false)
    const [initMouseX, setInitMouseX] = useState<number>(0)
    const [initOffsetX, setInitOffsetX] = useState<number>(0)
    const [offsetX, _setOffsetX] = useState<number>(0)
    const maxOffsetX = useMemo(
        (): number => BOX_WIDTH * (NUMBER_OF_BOXES - 3) - BOX_WIDTH,
        [NUMBER_OF_BOXES]
    )

    const onSliderMouseDown = (): void => {
        setIsGrabbed(true)
        setInitMouseX(mouse.x || 0)
        setInitOffsetX(offsetX)
    }

    const onSliderMouseUp = (): void => {
        setIsGrabbed(false)
        setInitMouseX(0)
        setInitOffsetX(0)
    }

    const jumpToSlide = (slide: number): void => {
        // Smoothly jump to another slide
        const off = slide * BOXES_PER_SLIDE * BOX_WIDTH
        _updateStyle("transition", "transform 250ms ease-in-out")
        setTimeout(() => {
            setOffsetX(off)
            setTimeout(() => {
                _updateStyle("transition", "none")
            }, 200)
        }, 100)
    }

    const selectSlideByOffsetX = (off: number): void => {
        const delta: number = off / (BOXES_PER_SLIDE * BOX_WIDTH)
        selectSlideById(Math.floor(delta))
    }

    const _updateStyle = (prop: string, val: string): void => {
        // @ts-ignore: Unreachable code error
        sliderChildRef.current.style[prop] = val
    }

    const _setTranslateStyle = (off: number): void => {
        _updateStyle("transform", `translateX(-${off}px)`)
    }

    const setOffsetX = (off: number): void => {
        if (off <= 0) {
            _setTranslateStyle(0)
            _setOffsetX(0)
            selectSlideById(0)
        } else if (off >= maxOffsetX) {
            _setTranslateStyle(maxOffsetX)
            _setOffsetX(maxOffsetX)
            selectSlideById(NUMBER_OF_SLIDES - 1)
        } else {
            _setTranslateStyle(off)
            _setOffsetX(off)

            // Simple throttling
            if (off % 4 == 0) {
                selectSlideByOffsetX(off)
            }
        }
    }

    // Main event-loop
    useEffect(() => {
        if (isGrabbed && mouse.x !== null) {
            let v = 0
            let delta = 0
            if (mouse.x > initMouseX) {
                // Move to the right
                delta = mouse.x - initMouseX
                v = initOffsetX - delta
            } else {
                // Move to the left
                delta = initMouseX - mouse.x
                v = initOffsetX + delta
            }
            setOffsetX(v)
        }
    }, [isGrabbed, mouse.x])

    return {
        sliderRef,
        sliderChildRef,
        isGrabbed,
        offsetX,
        onSliderMouseDown,
        onSliderMouseUp,
        selectedSlideId,
        jumpToSlide,
    }
}

export default useSlider
