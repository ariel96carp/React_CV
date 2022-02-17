import PropTypes from "prop-types"
import arrowImage from "../img/down-arrow.png"
import { useRef } from "react"
import { FormattedMessage } from "react-intl"

const Carrer = ({ title, institute, time, period, titleLink, container }) => {
    const carrerButton = useRef()
    const carrerContainer = useRef()

    const addCarrerClass = () => {
        const containerElement = carrerContainer.current.parentElement
        const carrerElements = containerElement.querySelectorAll(" .carrer:not(:first-child)")
        for (let i = 0; i < carrerElements.length; i++)
        {
            carrerElements[i].classList.toggle("show")
            if (carrerElements[i].classList.contains("show"))
            {
                switch(true)
                {
                    case i === 0:
                        carrerElements[i].style.transition = 
                        `opacity .5s, transform .5s`
                        break
                    default:
                        carrerElements[i].style.transition = 
                        `opacity .5s ${i / 4}s, transform .5s ${i / 4}s`
                }
            }
            else
            {
                carrerElements[i].style.transition = "none"
            }
        }
    }
    const toggleContainer = () => {
        carrerButton.current.classList.toggle("toggle")
        const containerElement = carrerButton.current.parentElement.parentElement.parentElement
        containerElement.classList.toggle("open")
        addCarrerClass()
    }

    return (
        <div className="carrer" ref={carrerContainer}>
            {container
                ? (
                    <div className="flex-carrer">
                        <h3>{title}</h3>
                        <div
                        className="button-container"
                        onClick={toggleContainer}
                        ref={carrerButton}>
                            <img src={arrowImage} alt="Imagen de flecha"></img>
                        </div>
                    </div>
                )
                : (
                    <h3>{title}</h3>
                )
            }
            <p className="institute">{institute}</p>
            <p className="time">{time}</p>
            <p className="period">{period}</p>
            {titleLink && 
                <a 
                className="title-link"
                href={titleLink}
                target="_blank"
                rel="noreferrer">
                    <FormattedMessage
                        id="carrer.certificate"
                    />
                </a>
            }
        </div>
    )
}

Carrer.propTypes={
    title: PropTypes.string.isRequired,
    institute: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    titleLink: PropTypes.string,
    container: PropTypes.bool
}

export default Carrer