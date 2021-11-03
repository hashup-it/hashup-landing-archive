import { useEffect } from "react"
import { withRouter } from "react-router-dom"

function ScrollToTop({ history }: { history: any }) {
    useEffect(() => {
        const unListen = history.listen(() => {
            window.scrollTo(0, 0)
        })
        return () => {
            unListen()
        }
    }, [history])

    return null
}

export default withRouter(ScrollToTop)
