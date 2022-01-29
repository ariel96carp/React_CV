import propTypes from "prop-types"
import checkImage from "../img/cheque.png"
import errorImage from "../img/cerrar.png"

const FormMessage = ({ sendedMessage, closeFunction }) => { 
    return (
        <div className={`form-message 
            ${sendedMessage === true
                ? ""
                : "error"
            } l-60 m-80 s-90`}>
            {sendedMessage === true
                ? (
                    <>
                        <div className="icon">
                            <img src={checkImage} alt="Imagen de validación"></img>
                        </div>
                        <div className="message">
                            <h2>¡Mensaje enviado!</h2>
                            <p className="center-content">
                                ¡Muchas gracias por tu interés! <br></br>
                                A la brevedad estaré constestando.
                            </p>
                            <button onClick={closeFunction}>Cerrar</button>
                        </div>
                    </>
                )
                : (
                    <>
                        <div className="icon error">
                            <img src={errorImage} alt="Imagen de error"></img>
                        </div>
                        <div className="message">
                            <h2>¡Error!</h2>
                            <p className="center-content">
                                Ups... el mensaje no pudo ser enviado. <br></br>
                                Por favor inténtelo de vuelta más tarde.
                            </p>
                            <button onClick={closeFunction}>Cerrar</button>
                        </div>
                    </>
                )    
            }
        </div>
    )
}

FormMessage.propTypes = {
    sendedMessage: propTypes.bool.isRequired,
    closeFunction: propTypes.func.isRequired
}

export default FormMessage