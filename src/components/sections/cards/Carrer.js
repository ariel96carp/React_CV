import PropTypes from "prop-types"
import arrowImage from "../../img/down-arrow.png"
import { useRef, useEffect } from "react"

const Carrer = ({ title, institute, time, period, titleLink, container }) => {
    const carrerButton = useRef()
    const carrerContainer = useRef()
    useEffect(() => {
        if (container)
        {
            const containerElement = carrerContainer.current.parentElement
            const carrerElements = containerElement.querySelectorAll(" .carrer:not(:first-child)")
            const carrersArray = Array.from(carrerElements)
            for (let i = 0; i < carrersArray.length; i++)
            if (i == 0)
            {
                carrersArray[i].style.transition = 
                `opacity .5s, transform .5s`
            }
            else
            {
                carrersArray[i].style.transition = 
                `opacity .5s ${i / 4}s, transform .5s ${i / 4}s`
            }
        }
    }, [])

    const addCarrerClass = () => {
        const containerElement = carrerContainer.current.parentElement
        const carrerElements = containerElement.querySelectorAll(" .carrer:not(:first-child)")
        for (let element of carrerElements)
        {
            element.classList.toggle("show")
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
                    Certificado
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