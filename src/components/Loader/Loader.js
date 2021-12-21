import propTypes from "prop-types"

const Loader = ({ message }) => {
    return (
        <div className="loader-content">
            <div className="loader center-block"></div>
            {message && 
                <p className="message">
                    {message}
                </p>
            }
        </div>
    )
}

Loader.propTypes={
    message: propTypes.string
}

export default Loader