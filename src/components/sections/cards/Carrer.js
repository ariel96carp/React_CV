import PropTypes from "prop-types"

const Carrer = ({ title, institute, time, period }) => {
    return (
        <div className="carrer">
            <h3>{title}</h3>
            <p className="institute">{institute}</p>
            <p className="time">{time}</p>
            <p className="period">{period}</p>
        </div>
    )
}

Carrer.propTypes={
    title: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired
}

export default Carrer