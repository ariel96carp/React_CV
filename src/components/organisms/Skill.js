import PropTypes from "prop-types"

const Skill = ({ tecnology, level, image }) => {
    return (
        <div className="card">
            <img src={image} alt={`Logo de ${tecnology}`} className="center-block" />
            <h3 className="type">{tecnology}</h3>
            <p>Nivel: {level}</p>
        </div>
    )
}

Skill.propTypes={
    tecnology: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Skill