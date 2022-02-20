import { Link } from "react-router-dom"
import { FormattedMessage } from "react-intl"
import { useEffect } from "react"

const Error404 = () => {
    useEffect(() => {
        document.body.classList.add("error-body")

        return () => {
            document.body.classList.remove("error-body")
        }
    }, [])

    return (
        <div className="wrapper">
            <div className="error-container center-content">
                <h2 className="error-title">
                    <FormattedMessage
                        id="error404.title"
                    />
                </h2>
                <h1 className="error-status">404</h1>
                <p className="error-description">
                    <FormattedMessage
                        id="error404.description"
                    />
                </p>
                <Link to="/" className="home-link">
                    <FormattedMessage
                        id="error404.button"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Error404