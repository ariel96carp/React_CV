import image from "../img/nueva.webp"
import cv from "../../cv/Desarrollador_Web_Front-End_JrTrainee_compressed.pdf"
import { FormattedMessage } from "react-intl"

const AboutMe = () => {
    return (
        <section className="about-me wrapper section-padding" id="aboutSection">
            <h2 className="center-content title">
                <FormattedMessage
                    id="about.title"
                /></h2>
            <div className="section-grid">
                <div className="description">
                    <h3 className="title">
                        <FormattedMessage
                            id="about.content.title"
                        /></h3>
                    <p>
                        <FormattedMessage
                            id="about.content.first"
                        />
                    </p>
                    <p>
                        <FormattedMessage
                            id="about.content.second"
                        />              
                    </p>
                    <p>
                        <FormattedMessage
                            id="about.content.third"
                        />
                    </p>
                    <a href={cv} className="download image" download>
                        <FormattedMessage
                            id="about.download"
                        />
                    </a>
                </div>
                <div className="images">
                    <img src={image} alt="Pies sobre la calle"></img>
                </div>
            </div>
        </section>
    )
}

export default AboutMe