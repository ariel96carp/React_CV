import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="wrapper">
            <div className="error-container center-content">
                <h2 className="error-title">Ups... la página no pudo ser encontrada.</h2>
                <h1 className="error-status">404</h1>
                <p className="error-description">No pudimos encontrar la página que estás buscando.</p>
                <Link to="/" className="home-link">Volver al inicio</Link>
            </div>
        </div>
    )
}

export default Error404