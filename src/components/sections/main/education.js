import Carrer from "../cards/Carrer"
import CarrerContainer from "../cards/CarrerContainer"

const Education = () => {
    return (
        <section className="education section-padding" id="educationSection">
            <div className="description-container">
                <div className="wrapper">
                    <h2 className="center-content">Formación</h2>
                    <p className="description center-content">Educación y cursos realizados</p>
                </div>
            </div>
            <div className="education-container">
                <div className="wrapper l-60 m-80 s-90 center-block">
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
                    <CarrerContainer
                        title="Frontend Desde Cero"
                        institute="EDteam (Plataforma de Educación Online)"
                        time="47 horas"
                        period="2021" 
                        titleLink="https://ed.team/@dantecarrasco/speciality/frontend" 
                        carrersArray={[
                            {
                                title: "HTML Desde Cero",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "6 horas",
                                period: "2020", 
                                titleLink: "https://ed.team/@dantecarrasco/curso/html"
                            },
                            {
                                title: "CSS Desde Cero",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "9 horas",
                                period: "2020",
                                titleLink: "https://ed.team/@dantecarrasco/curso/css"
                            },
                            {
                                title: "JavaScript Desde Cero",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "8 horas",
                                period: "2020",
                                titleLink: "https://ed.team/@dantecarrasco/curso/javascript"
                            },
                            {
                                title: "JavaScript en el Navegador",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "4 horas",
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/js-dom"
                            },
                            {
                                title: "GIT Desde Cero",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "5 horas",
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/git"
                            },
                            {
                                title: "Flexbox y Grid",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "5 horas",
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/flexbox-grid"
                            },
                            {
                                title: "Variables CSS",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "2 horas",
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/variables-css"
                            },
                            {
                                title: "SASS Desde Cero",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "4 horas",
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/sass"
                            },
                            {
                                title: "Responsive Web Design",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "5 horas",
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/rwd"
                            }
                        ]}/>
                    <CarrerContainer
                        title="Desarrollo Web con JavaScript"
                        institute="EDteam (Plataforma de Educación Online)"
                        time="26 horas"
                        period="2021" 
                        titleLink="https://ed.team/@dantecarrasco/speciality/javascript" 
                        carrersArray={[
                            {
                                title: "JavaScript Desde Cero",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "8 horas",
                                period: "2020",
                                titleLink: "https://ed.team/@dantecarrasco/curso/javascript"
                            },
                            {
                                title: "JavaScript en el Navegador",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "4 horas",
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/js-dom"
                            },
                            {   
                                title: "Programación Orientada a Objetos con JavaScript",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "4 horas",
                                period: "2020",
                                titleLink: "https://ed.team/@dantecarrasco/curso/js-poo"
                            },
                            {
                                title: "Ajax y Websockets",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "6 horas",
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/ajax-ws"
                            },
                            {
                                title: "Single Page Aplication con JavaScript",
                                institute: "EDteam (Plataforma de Educación Online)",
                                time: "5 horas",
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/spa"
                            }
                        ]}/>
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