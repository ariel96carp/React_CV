import propTypes from "prop-types"
import Carrer from "./Carrer"
import { useEffect, useRef } from "react"

const CarrerContainer = ({ title, institute, time, period, titleLink, carrersArray }) => {
    const carrersContainer = useRef()
    useEffect(() => {
        const setInitialHeight = setTimeout(() => {
            setElementHeight()
        }, 100)

        window.addEventListener("resize", setElementHeight)
        return () => {
            window.removeEventListener("resize", setElementHeight)
            clearTimeout(setInitialHeight)
        }
    }, [])

    const setElementHeight = () => {
        const firstElement = carrersContainer.current.querySelector(".carrer:first-of-type")
        const firstElementHeight = firstElement.getBoundingClientRect().height.toFixed(2)
        carrersContainer.current.style.setProperty("--initial-height", `${firstElementHeight}px`)
    }

    return (
        <div className="carrers-container" ref={carrersContainer}>
            <Carrer
                title={title}
                institute={institute}
                time={time}
                period={period} 
                titleLink={titleLink} 
                container={true} />
            {carrersArray.map((carrer, index) => 
                <Carrer
                    key={index + 1}
                    title={carrer.title}
                    institute={carrer.institute}
                    time={carrer.time}
                    period={carrer.period}
                    titleLink={carrer.titleLink} />
            )}
        </div>
    )
}

CarrerContainer.propTypes={
    carrersArray: propTypes.array.isRequired
}

export default CarrerContainer