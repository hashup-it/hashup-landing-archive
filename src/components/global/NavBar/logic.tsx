import { useEffect, useState } from "react"

// Throttling function
const throttle = (callback: CallableFunction, limit: number): any => {
    let wait = false

    return function () {
        if (!wait) {
            callback()
            wait = true
            setTimeout(() => {
                wait = false
            }, limit)
        }
    }
}

const DELTA: number = 150
const NAV_VISIBLE_AREA_HEIGHT: number = 300
const START_COUNTING_AFTER: number = 600

export enum NavBarStateEnum {
    top,
    stickyHidden,
    stickyHiddenAfterTop,
    stickyShown,
}

const initState = (): NavBarStateEnum => {
    if (typeof window !== undefined) {
        return NavBarStateEnum.top
    }
    return window.scrollY === 0 ? NavBarStateEnum.top : NavBarStateEnum.stickyShown
}

export const useNavBarScrollEffect = (): { navBarState: NavBarStateEnum } => {
    const [state, setState] = useState<NavBarStateEnum>(initState())

    useEffect(() => {
        let lastPositionY: number = window.scrollY

        const handleScroll = throttle(() => {
            if (window.scrollY <= 3) {
                // Absolute top of the page
                setState(NavBarStateEnum.top)
            } else {
                if (window.scrollY <= START_COUNTING_AFTER) {
                    // First area, nav-bar is 'top' or still 'stickyShown'
                    if (state === NavBarStateEnum.top && window.scrollY > NAV_VISIBLE_AREA_HEIGHT) {
                        setState(NavBarStateEnum.stickyHiddenAfterTop)
                    } else if (
                        (state === NavBarStateEnum.stickyHiddenAfterTop ||
                            state === NavBarStateEnum.stickyHidden) &&
                        window.scrollY <= NAV_VISIBLE_AREA_HEIGHT
                    ) {
                        setState(NavBarStateEnum.top)
                    }
                } else {
                    // Second area (nav-bar is sticky)
                    if (window.scrollY + DELTA <= lastPositionY) {
                        // If scroll up
                        setState(NavBarStateEnum.stickyShown)
                        lastPositionY = window.scrollY
                    } else if (window.scrollY - DELTA > lastPositionY) {
                        // If scroll down
                        setState(NavBarStateEnum.stickyHidden)
                        lastPositionY = window.scrollY
                    }
                }
            }
        }, 10)

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [state])

    return { navBarState: state }
}
