import { HashLink } from "react-router-hash-link"

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
            </div>
        </div>
    )
}

export default Banner