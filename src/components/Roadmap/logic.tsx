import { useEffect, useMemo, useRef, useState } from 'react'
import useMouse from '@react-hook/mouse-position'
import { useWindowWidth } from '@react-hook/window-size'
import { infoBoxesData } from './data'

export const BOX_WIDTH: number = 367 + 2 * 13 // width + margin
export const NUMBER_OF_BOXES = infoBoxesData.length
// export const BOXES_PER_SLIDE: number = 2
// export const NUMBER_OF_SLIDES: number = NUMBER_OF_BOXES / BOXES_PER_SLIDE - 1

interface useSliderInterface {
    sliderRef: React.RefObject<HTMLDivElement>
    sliderChildRef: React.RefObject<HTMLDivElement>
    readonly isGrabbed: boolean
    readonly selectedSlideId: number
    readonly numberOfSlides: number
    readonly onSliderMouseDown: () => void
    readonly onSliderMouseUp: () => void
    readonly jumpToSlide: (slide: number) => void
}

const useSlider = (): useSliderInterface => {
    const sliderRef = useRef<HTMLDivElement>(null)
    const sliderChildRef = useRef<HTMLDivElement>(null)
    const mouse = useMouse(sliderRef, { fps: 90, enterDelay: 50 })
    const [selectedSlideId, selectSlideById] = useState<number>(2)
    const [isGrabbed, setIsGrabbed] = useState<boolean>(false)
    const [initMouseX, setInitMouseX] = useState<number>(0)
    const [initOffsetX, setInitOffsetX] = useState<number>(0)
    const [offsetX, _setOffsetX] = useState<number>(0)
    const windowWidth = useWindowWidth()
    const boxesPerSlide = useMemo(() => {
        const v = Math.floor(windowWidth / BOX_WIDTH)
        return v <= 1 ? 1 : v
    }, [windowWidth])
    const numberOfSlides = useMemo(
        () => Math.ceil(NUMBER_OF_BOXES / boxesPerSlide),
        [boxesPerSlide]
    )
    const maxOffsetX = useMemo(
        (): number => BOX_WIDTH * NUMBER_OF_BOXES - boxesPerSlide * BOX_WIDTH,
        [boxesPerSlide]
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
        const off = slide * boxesPerSlide * BOX_WIDTH
        _updateStyle('transition', 'transform 250ms ease-in-out')
        setTimeout(() => {
            setOffsetX(off)
            setTimeout(() => {
                _updateStyle('transition', 'none')
            }, 200)
        }, 100)
    }


    const selectSlideByOffsetX = (off: number): void => {
        const delta: number = off / (boxesPerSlide * BOX_WIDTH)
        selectSlideById(Math.floor(delta))
    }

    const _updateStyle = (prop: string, val: string): void => {
        // @ts-ignore: Unreachable code error
        sliderChildRef.current.style[prop] = val
    }

    const _setTranslateStyle = (off: number): void => {
        _updateStyle('transform', `translateX(-${off}px)`)
    }

    const setOffsetX = (off: number): void => {
        if (off <= 0) {
            _setTranslateStyle(0)
            _setOffsetX(0)
            selectSlideById(0)
        } else if (off >= maxOffsetX) {
            _setTranslateStyle(maxOffsetX)
            _setOffsetX(maxOffsetX)
            selectSlideById(numberOfSlides - 1)
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

    useEffect(() => {
        jumpToSlide(2)
    }, [])

    return {
        sliderRef,
        sliderChildRef,
        isGrabbed,
        onSliderMouseDown,
        onSliderMouseUp,
        selectedSlideId,
        jumpToSlide,
        numberOfSlides
    }

}

export default useSlider
