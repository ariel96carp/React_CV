import image from "../../img/Shoes-feet-street_m.jpg"
import LoremIpsum from "react-lorem-ipsum"

const AboutMe = () => {
    return (
        <section className="about-me wrapper section-padding" id="aboutSection">
            <h2 className="center-content title">Sobre mí</h2>
            <div className="section-grid">
                <div className="description">
                    <h3>Soy un Desarrollador Web Front-End.</h3>
                    <LoremIpsum p={1} />
                </div>
                <div className="images">
                    <img src={image} alt="Pies sobre la calle"></img>
                </div>
            </div>
        </section>
    )
}

export default AboutMe