import MessageForm from "../forms/MessageForm"

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
                                <iframe 
                                    title="Mi dirección" 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.6274016726516!2d-58.53757248519131!3d-34.71457667087842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccf414a73e80b%3A0x28047d49fbda8bf1!2s1%C2%B0%20de%20Mayo%20de%201982%2C%20Cdad.%20Evita%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1638814932181!5m2!1ses-419!2sar" 
                                    style={{border: 0}} 
                                    allowFullScreen="" 
                                    loading="lazy">    
                                </iframe>
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
                            <a href="https://github.com/ariel96carp/React_CV" target="_blank">https://github.com/ariel96carp/React_CV</a>
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