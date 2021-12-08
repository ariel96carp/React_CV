import Carrer from "../cards/Carrer"

const Education = () => {
    return (
        <section className="education section-padding" id="educationSection">
                <h2 className="center-content">Formación</h2>
                <p className="center-content">Educación y cursos realizados</p>
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
                            period="2021" />
                        <Carrer
                            title="Desarrollo Web con JavaScript"
                            institute="EDteam (Plataforma de Educación Online)"
                            time="26 horas"
                            period="2021" />
                        <Carrer
                            title="CSS Avanzado"
                            institute="EDteam (Plataforma de Educación Online)"
                            time="14 horas"
                            period="2021" />
                        <Carrer
                            title="React Desde Cero"
                            institute="EDteam (Plataforma de Educación Online)"
                            time="7 horas"
                            period="2021" />    
                    </div>
                </div>
        </section>
    )
}

export default Education