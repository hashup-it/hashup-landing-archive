import Script from "next/script"
import { scriptsUrl } from "config"

const Form = () => (
    <>
        <Script src={scriptsUrl("mailer-newsletter.js")} />
        <div
            className="ml-form-embed"
            data-account="3556595:b7a5n7e8w5"
            data-form="4955744:x2o8o0"
        />
    </>
)

export default Form
