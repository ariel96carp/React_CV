import { HashLink } from "react-router-hash-link"
import { FormattedMessage } from "react-intl"
import { connect } from "react-redux"
import { useRef } from "react"
import linkedinImage from "../img/linkedin.png"
import githubImage from "../img/github1.png"
import argentinianFlag from "../img/argentina.png"
import americanFlag from "../img/estados-unidos-de-america.png"
import { changeToSpanish, changeToEnglish } from "../redux/actionscreator"

const Banner = ({ addSpanish, addEnglish }) => {
    const languageSelector = useRef()

    return (
        <div className="main-banner" id="bannerSection">
            <div className="wrapper">
                <div className="lenguages">
                    <img 
                        src={argentinianFlag} 
                        alt="Bandera de Argentina"
                        onClick={addSpanish}
                    />
                    <img 
                        src={americanFlag} 
                        alt="Bandera de Estados Unidos"
                        onClick={addEnglish}
                    />
                    <div className="select-container">
                        <select 
                            name="language-selector"
                            className="language-selector"
                            ref={languageSelector}>
                            <option value="english">Inglés</option>
                            <option value="spanish">Español</option>
                        </select>
                        <span className="custom-arrow"></span>
                    </div>
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

const mapDispatchToProps = dispatch => ({
    addSpanish(){
        dispatch(changeToSpanish())
    },
    addEnglish(){
        dispatch(changeToEnglish())
    }
})

export default connect(null, mapDispatchToProps)(Banner)