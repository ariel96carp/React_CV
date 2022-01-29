import MessageForm from "../forms/MessageForm"
import Map from "../../Map/Map"

const Contact = () => {
    return (
        <section className="contact section-padding" id="contactSection">
            <div className="wrapper">
                <h2 className="title center-content">Contactáme</h2>
                <p className="description center-content">
                    En caso de querer contactarme,
                    podés acceder a la siguiente información:
                </p>
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Información de Contacto</h2>
                        <div className="contact-box">
                            <div className="detail">
                                <div className="detail-image"></div>
                                <div className="description">
                                    <h3 className="type">Dirección</h3>
                                    <p className="info">
                                        Ciudad Evita, <br></br>
                                        1º de Mayo de 1982, <br></br>
                                        Módulo 1 Casa 6, <br></br> 
                                        Nº1028, CP 1778
                                    </p> 
                                </div>
                            </div>
                            <div className="map-container">
                                <Map />
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="detail">
                                <div className="detail-image"></div>
                                <div className="description">
                                    <h3 className="type">Teléfono</h3>
                                    <p className="info">1168922029</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="detail">
                                <div className="detail-image"></div>
                                <div className="description">
                                    <h3 className="type">Email</h3>
                                    <p className="info">arielcarp1996@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-box">
                            <h3 className="type">Este repositorio</h3>
                            <a 
                                href="https://github.com/ariel96carp/React_CV" 
                                target="_blank"
                                rel="noreferrer">
                            https://github.com/ariel96carp/React_CV</a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h2>Escribime</h2>
                        <MessageForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact