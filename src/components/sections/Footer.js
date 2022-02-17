import { FormattedMessage } from "react-intl"

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <p className="center-content">
                    <FormattedMessage
                        id="footer.content"
                    />
                </p>
            </div>
        </footer>
    )
}

export default Footer