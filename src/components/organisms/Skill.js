import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"

const Skill = ({ tecnology, level, image }) => {
    return (
        <article className="card">
            <img src={image} alt={`Logo de ${tecnology}`} className="center-block" />
            <h3 className="type">{tecnology}</h3>
            <p>
                <FormattedMessage
                    id="skill.level"
                /> {level}</p>
        </article>
    )
}

Skill.propTypes={
    tecnology: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Skill