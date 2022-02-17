import Carrer from "../organisms/Carrer"
import CarrerContainer from "../organisms/CarrerContainer"
import { FormattedMessage, useIntl } from "react-intl"

const Education = () => {
    const intl = useIntl()
    const edteam = intl.formatMessage({ id: "carrer.place-edteam" })
    const time = intl.formatMessage({ id: "carrer.time" })
    const period = intl.formatMessage({ id: "carrer.period" })
    const level = intl.formatMessage({ id: "carrer.level" })

    return (
        <section className="education section-padding" id="educationSection">
            <div className="description-container">
                <div className="wrapper">
                    <h2 className="center-content">
                        <FormattedMessage
                            id="education.title"
                        /></h2>
                    <p className="description center-content">
                        <FormattedMessage
                            id="education.description"
                        /></p>
                </div>
            </div>
            <div className="education-container">
                <div className="wrapper l-60 m-80 s-90 center-block">
                    <Carrer
                        title="Bachillerato Nacional con Orientación en Informática"
                        institute={intl.formatMessage({ id: "carrer.institute-esba" })}
                        time={intl.formatMessage({ id: "carrer.study-highschool" })}
                        period="2009-2013" />
                    <Carrer
                        title="Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones"
                        institute={intl.formatMessage({ id: "carrer.institute-college" })}
                        time={ intl.formatMessage({ id: "carrer.study-communitycollege" })}
                        period={`2017-${period}`} />
                    <Carrer
                        title="Certificate in Advanced English"
                        institute={intl.formatMessage({ id: "carrer.institute-cambridge" })}
                        time={`${level} B2`}
                        period="2009-2013" />
                    <CarrerContainer
                        title={intl.formatMessage({ id:"carrer.title-frontendFromScratch" })}
                        institute={edteam}
                        time={`47 ${time}`}
                        period="2021" 
                        titleLink="https://ed.team/@dantecarrasco/speciality/frontend" 
                        carrersArray={[
                            {
                                institute: edteam,
                                title: intl.formatMessage({ id: "carrer.title-htmlFromScratch" }),
                                time: `6 ${time}`,
                                period: "2020", 
                                titleLink: "https://ed.team/@dantecarrasco/curso/html"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-cssFromScratch" }),
                                institute: edteam,
                                time: `9 ${time}`,
                                period: "2020",
                                titleLink: "https://ed.team/@dantecarrasco/curso/css"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-jsFromScratch" }),
                                institute: edteam,
                                time: `8 ${time}`,
                                period: "2020",
                                titleLink: "https://ed.team/@dantecarrasco/curso/javascript"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-jsInBrowser" }),
                                institute: edteam,
                                time: `4 ${time}`,
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/js-dom"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-gitFromScratch" }),
                                institute: edteam,
                                time:`5 ${time}`,
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/git"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-flexboxAndGrid" }),
                                institute: edteam,
                                time: `5 ${time}`,
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/flexbox-grid"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-cssVariables" }),
                                institute: edteam,
                                time: `2 ${time}`,
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/variables-css"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-sassFromScratch" }),
                                institute: edteam,
                                time: `4 ${time}`,
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/sass"
                            },
                            {
                                title: "Responsive Web Design",
                                institute: edteam,
                                time: `5 ${time}`,
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/rwd"
                            }
                        ]}/>
                    <CarrerContainer
                        title={intl.formatMessage({ id: "carrer.title-webDevelopmentWithJavascript" })}
                        institute={edteam}
                        time={`26 ${time}`}
                        period="2021" 
                        titleLink="https://ed.team/@dantecarrasco/speciality/javascript" 
                        carrersArray={[
                            {
                                title: intl.formatMessage({ id: "carrer.title-jsFromScratch" }),
                                institute: edteam,
                                time: `8 ${time}`,
                                period: "2020",
                                titleLink: "https://ed.team/@dantecarrasco/curso/javascript"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-jsInBrowser" }),
                                institute: edteam,
                                time: `4 ${time}`,
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/js-dom"
                            },
                            {   
                                title: intl.formatMessage({ id: "carrer.title-oopWithJavascript" }),
                                institute: edteam,
                                time: `4 ${time}`,
                                period: "2020",
                                titleLink: "https://ed.team/@dantecarrasco/curso/js-poo"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-ajaxAndWebsocket" }),
                                institute: edteam,
                                time: `6 ${time}`,
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/ajax-ws"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-spaWithJavascript" }),
                                institute: edteam,
                                time: `5 ${time}`,
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/spa"
                            }
                        ]}/>
                    <CarrerContainer
                        title={intl.formatMessage({ id: "carrer.title-frontendDevelopmentWithReact" })}
                        institute={edteam}
                        time={`21 ${time}`}
                        period="2022"
                        titleLink="https://ed.team/@dantecarrasco/speciality/react"
                        carrersArray={[
                            {
                                title: intl.formatMessage({ id: "carrer.title-reactFromScratch" }),
                                institute: edteam,
                                time: `8 ${time}`,
                                period: "2021",
                                titleLink: "https://ed.team/@dantecarrasco/curso/reactjs"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-reactState" }),
                                institute: edteam,
                                time: `6 ${time}`,
                                period: "2021", 
                                titleLink: "https://ed.team/@dantecarrasco/curso/react-state"
                            },
                            {
                                title: intl.formatMessage({ id: "carrer.title-reactEducationPlatform" }),
                                institute: edteam,
                                time: `8 ${time}`,
                                period: "2022",
                                titleLink: "https://ed.team/@dantecarrasco/curso/workshop-react"
                            }
                        ]}/>
                    <Carrer
                        title={intl.formatMessage({ id: "carrer.title-advancedCSS" })}
                        institute={edteam}
                        time={`14 ${time}`}
                        period="2021" 
                        titleLink="https://ed.team/@dantecarrasco/curso/css-avanzado" />
                </div>
            </div>
        </section>
    )
}

export default Education