import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"

const Skill = ({ tecnology, level, image }) => {
    return (
        <div className="card">
            <img src={image} alt={`Logo de ${tecnology}`} className="center-block" />
            <h3 className="type">{tecnology}</h3>
            <p>
                <FormattedMessage
                    id="skill.level"
                /> {level}</p>
        </div>
    )
}

Skill.propTypes={
    tecnology: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Skill