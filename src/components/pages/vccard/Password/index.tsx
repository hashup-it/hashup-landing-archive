import { assetsUrl } from "config"
import Image from "next/image"
import { useState, KeyboardEvent, FC } from "react"
import { Trans, useTranslation } from "react-i18next"
import { StyledContentWrapper, StyledInputBox } from "./index.styles"
import { StyledTitle } from "components/shared/Header/GenericHeaderText/index.styles"
import Cookies from "js-cookie"

export const PasswordConfig = {
    correctPass: "HashUp69",
    cookieName: "SUPER_SECRET_COOKIE_1337",
    cookieValue: "Steam_sucks.",
    cookieOptions: {
        expires: 2,
    },
} as const

const Input: FC<{ setAuthorized: () => void }> = ({ setAuthorized }) => {
    const { t } = useTranslation()
    const [pass, setPass] = useState<string>("")

    const checkPass = () => {
        if (pass === PasswordConfig.correctPass) {
            Cookies.set(
                PasswordConfig.cookieName,
                PasswordConfig.cookieValue,
                PasswordConfig.cookieOptions
            )
            setAuthorized()
        }
    }

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log(e.key)

        if (e.key === "Enter") {
            checkPass()
        }
    }

    return (
        <StyledInputBox>
            <input
                value={pass}
                onChange={e => setPass(e.target.value)}
                placeholder={t("vccard.password.input.placeholder")}
                onKeyDown={handleEnter}
            />
            <button onClick={checkPass}>{t("vccard.password.input.button-label")}</button>
        </StyledInputBox>
    )
}

const Password: FC<{ setAuthorized: () => void }> = ({ setAuthorized }) => {
    return (
        <StyledContentWrapper>
            <div className="icon">
                <Image
                    src={assetsUrl("vccard/key-icon.svg")}
                    width={100}
                    height={100}
                    alt=""
                    priority
                />
            </div>
            <StyledTitle>
                <Trans i18nKey="vccard.password.title" />
            </StyledTitle>
            <Input setAuthorized={setAuthorized} />
        </StyledContentWrapper>
    )
}

export default Password
