import { HashLink } from "react-router-hash-link"
import linkedinImage from "../../img/linkedin.png"
import githubImage from "../../img/github1.png"

const Banner = () => {
    return (
        <div className="main-banner" id="bannerSection">
            <div className="wrapper">
                <div className="content">
                    <h2>Hola, soy <br></br>
                        <span className="name">Dante Carrasco.</span> 
                    </h2>
                    <p className="description">Soy un Desarrollador Web Front-End.</p>
                </div>
                <HashLink to="/#aboutSection" className="button">Sobre mí</HashLink>
                <ul className="media-links">
                    <li className="media-item">
                        <a href="https://www.linkedin.com/in/dante-carrasco-1aaa9419b/" target="_blank">
                            <img src={linkedinImage} alt="Logo de Linkedin"></img>
                        </a>
                    </li>
                    <li className="media-item">
                        <a href="https://github.com/ariel96carp" target="_blank">
                            <img src={githubImage} alt="Logo de GitHub"></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Banner