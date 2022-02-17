import { HashLink } from "react-router-hash-link"
import { FormattedMessage } from "react-intl"
import linkedinImage from "../img/linkedin.png"
import githubImage from "../img/github1.png"
import argentinianFlag from "../img/argentina.png"
import americanFlag from "../img/estados-unidos-de-america.png"

const Banner = () => {
    return (
        <div className="main-banner" id="bannerSection">
            <div className="wrapper">
                <div className="lenguages">
                    <img src={argentinianFlag} alt="Bandera de Argentina"></img>
                    <img src={americanFlag} alt="Bandera de Estados Unidos"></img>
                </div>
                <div className="content">
                    <h2>
                        <FormattedMessage
                            id="banner.welcome"
                        /><br></br>
                        <span className="name">Dante Carrasco.</span> 
                    </h2>
                    <p className="description">
                        <FormattedMessage
                            id="banner.description"
                        /></p>
                    <HashLink to="/#aboutSection" className="button">
                        <FormattedMessage
                            id="banner.button"
                        />
                    </HashLink>
                </div>
                <ul className="media-links">
                    <li className="media-item">
                        <a 
                            href="https://www.linkedin.com/in/dante-carrasco-1aaa9419b/" 
                            target="_blank"
                            rel="noreferrer">
                            <img src={linkedinImage} alt="Logo de Linkedin"></img>
                        </a>
                    </li>
                    <li className="media-item">
                        <a 
                            href="https://github.com/ariel96carp" 
                            target="_blank"
                            rel="noreferrer">
                            <img src={githubImage} alt="Logo de GitHub"></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Banner