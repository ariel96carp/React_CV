import Carrer from "../cards/Carrer"
import arrowImage from "../../img/down-arrow.png"
import { useRef, useEffect } from "react"

const Education = () => {
    const educationSection = useRef()
    const descriptionContainer = useRef()
    const containerButton = useRef()
    useEffect(() => { 
        setTimeout(() => {
            setDescriptionHeight()
        }, 100)
        
        window.addEventListener("resize", setDescriptionHeight)
        return(() => {
            window.removeEventListener("resize", setDescriptionHeight)
        })
    }, [])
    
    const setDescriptionHeight = () => {
        const containerHeight = descriptionContainer.current.getBoundingClientRect().height.toFixed(2)
        educationSection.current.style.setProperty("--initial-height", `${containerHeight}px`)
    }

    const addContainerPadding = () => {
        descriptionContainer.current.classList.toggle("section-padding")
        educationSection.current.classList.toggle("section-padding")
    }
    
    const rotateButton = () => {
        containerButton.current.classList.toggle("open")
    }

    const toggleContainer = () => {
        rotateButton()
        addContainerPadding()
        setDescriptionHeight()
        educationSection.current.classList.toggle("show")
    }
    
    return (
        <section className="education" id="educationSection" ref={educationSection}>
            <div className="description-container section-padding" ref={descriptionContainer}>
                <div className="wrapper">
                    <div className="flex-content m-60 s-80 center-block">
                        <h2>Formación</h2>
                        <div 
                            className="container-button"
                            ref={containerButton}
                            onClick={toggleContainer}>
                                <img src={arrowImage} alt="Imagen de flecha"></img>
                        </div>
                    </div>
                    <p className="description center-content">Educación y cursos realizados</p>
                </div>
            </div>
            <div className="education-container">
                <div className="wrapper l-60 m-80 center-block">
                    <Carrer
                        title="Bachillerato Nacional con Orientación en Informática"
                        institute="ESBA (Escuela Superior Brigadier Alvarado)"
                        time="Secundario"
                        period="2009-2013" />
                    <Carrer
                        title="Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones"
                        institute="Instituto Nº46 `2 de Abril de 1982`"
                        time="Terciario"
                        period="2017-Actualmente" />
                    <Carrer
                        title="Certificate in Advanced English"
                        institute="Instituto Cambridge de Cultura Inglesa"
                        time="Nivel B1"
                        period="2009-2013" />
                    <Carrer
                        title="Frontend Desde Cero"
                        institute="EDteam (Plataforma de Educación Online)"
                        time="47 horas"
                        period="2021" 
                        titleLink="https://ed.team/@dantecarrasco/speciality/frontend" />
                    <Carrer
                        title="Desarrollo Web con JavaScript"
                        institute="EDteam (Plataforma de Educación Online)"
                        time="26 horas"
                        period="2021" 
                        titleLink="https://ed.team/@dantecarrasco/speciality/javascript" />
                    <Carrer
                        title="CSS Avanzado"
                        institute="EDteam (Plataforma de Educación Online)"
                        time="14 horas"
                        period="2021" 
                        titleLink="https://ed.team/@dantecarrasco/curso/css-avanzado" />
                    <Carrer
                        title="React Desde Cero"
                        institute="EDteam (Plataforma de Educación Online)"
                        time="8 horas"
                        period="2021" 
                        titleLink="https://ed.team/@dantecarrasco/curso/reactjs" />
                    <Carrer
                        title="React - Manejo del Estado de la Aplicación"
                        institute="EDteam (Plataforma de Educación Online)"
                        time="6 horas"
                        period="2021" 
                        titleLink="https://ed.team/@dantecarrasco/curso/react-state" />    
                </div>
            </div>
        </section>
    )
}

export default Education