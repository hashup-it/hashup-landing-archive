import HeaderContent from "../components/pages/vccard/HeaderContent"
import Password, { PasswordConfig } from "../components/pages/vccard/Password"
import Cookies from "js-cookie"
import VideoHeader from "components/shared/Header/VideoHeader"

import bgImg from "/public/assets/header/cartridge.png"
import { FC, useEffect, useState } from "react"

const HeaderBackground: FC<{ readonly children: JSX.Element }> = ({ children }) => (
    <VideoHeader
        video={{ src: "https://cdn.hashup.it/landing/Hashup_web.mp4", opacity: 0.4 }}
        img={{ src: bgImg, alt: "test" }}
    >
        {children}
    </VideoHeader>
)

const VCCard = () => {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)

    useEffect(() => {
        // Check if authorized
        const cookie = Cookies.get(PasswordConfig.cookieName)
        setIsAuthorized(cookie === PasswordConfig.cookieValue)
    }, [])

    switch (isAuthorized) {
        case null:
            return (
                <HeaderBackground>
                    <></>
                </HeaderBackground>
            )
        case true:
            return (
                <HeaderBackground>
                    <HeaderContent />
                </HeaderBackground>
            )
        default:
            return (
                <HeaderBackground>
                    <Password setAuthorized={() => setIsAuthorized(true)} />
                </HeaderBackground>
            )
    }
}

export default VCCard
