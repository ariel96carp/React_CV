import PropTypes from "prop-types"

const Carrer = ({ title, institute, time, period, titleLink }) => {
    return (
        <div className="carrer">
            <h3>{title}</h3>
            <p className="institute">{institute}</p>
            <p className="time">{time}</p>
            <p className="period">{period}</p>
            {titleLink && 
                <a 
                    className="title-link"
                    href={titleLink}
                    target="_blank"
                    rel="noreferrer">
                Certificado</a>
            }
        </div>
    )
}

Carrer.propTypes={
    title: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    titleLink: PropTypes.string
}

export default Carrer