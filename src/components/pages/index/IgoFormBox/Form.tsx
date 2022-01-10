import { scriptsUrl } from "config"
import Script from "next/script"

const Form = () => (
    <>
        <Script src={scriptsUrl("mailer-igo.js")} />
        <div
            className="ml-form-embed"
            data-account="3556595:b7a5n7e8w5"
            data-form="5061527:j8h9l1"
        ></div>
    </>
)

export default Form
