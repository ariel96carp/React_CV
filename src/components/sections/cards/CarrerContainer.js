import propTypes from "prop-types"
import Carrer from "./Carrer"

const CarrerContainer = ({ title, institute, time, period, titleLink }) => {
    return (
        <Carrer
            title={title}
            institute={institute}
            time={time}
            period={period} 
            titleLink={titleLink} />
    )
}

CarrerContainer.propTypes={
    title: propTypes.string.isRequired,
    institute: propTypes.string.isRequired,
    time: propTypes.string.isRequired,
    period: propTypes.string.isRequired,
    titleLink: propTypes.string.isRequired
}

export default CarrerContainer