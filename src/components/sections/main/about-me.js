import image from "../../img/Shoes-feet-street_m.jpg"
import cv from "../../../cv/Curriculum Vitae (Actualizado).docx"

const AboutMe = () => {
    return (
        <section className="about-me wrapper section-padding" id="aboutSection">
            <h2 className="center-content title">Sobre mí</h2>
            <div className="section-grid">
                <div className="description">
                    <h3 className="title">Soy un Desarrollador Web Front-End.</h3>
                    <p>
                        ¡Hola! Soy un desarrollador web trainee con una fuerte base en HTML, CSS y JS.
                        Más allá de contar con estudios formales, tanto a nivel secundario como
                        terciario, relacionados a la computación; me gusta capacitarme todo el
                        tiempo, realizando cursos en plataformas online como Platzi o EDteam.
                    </p>
                    <p>
                        Si bien actualmente cuento con un perfil muy orientado al frontend.
                        Mi deseo es, cuando me considere lo suficientemente capacitado en el manejo 
                        de React, comenzar a educarme en tecnologías pertenecientes al back; tales 
                        como Phyton o NodeJS.                
                    </p>
                    <p>
                        Además del conocimiento de tecnologías relacionadas al desarrollo web, cuento
                        con nociones de C#, SQL y el entorno ".NET".
                    </p>
                    <a href={cv} className="download image" download>Descargar CV</a>
                </div>
                <div className="images">
                    <img src={image} alt="Pies sobre la calle"></img>
                </div>
            </div>
        </section>
    )
}

export default AboutMe