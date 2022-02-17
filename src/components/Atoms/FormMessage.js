import propTypes from "prop-types"
import checkImage from "../img/cheque.png"
import errorImage from "../img/cerrar.png"
import { FormattedMessage } from "react-intl"

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
                            <h2>
                                <FormattedMessage
                                    id="message-form.title-success"
                                />
                            </h2>
                            <p className="center-content">
                                <FormattedMessage
                                    id="message-form.content.first-success"
                                /><br></br>
                                <FormattedMessage
                                    id="message-form.content.second-success"
                                />
                            </p>
                            <button onClick={closeFunction}>
                                <FormattedMessage
                                    id="message-form.button"
                                />
                            </button>
                        </div>
                    </>
                )
                : (
                    <>
                        <div className="icon error">
                            <img src={errorImage} alt="Imagen de error"></img>
                        </div>
                        <div className="message">
                            <h2>
                                <FormattedMessage
                                    id="message-form.title-error"
                                />
                            </h2>
                            <p className="center-content">
                                <FormattedMessage
                                    id="message-form.content.first-error"
                                /><br></br>
                                <FormattedMessage
                                    id="message-form.content.second-error"
                                />
                            </p>
                            <button onClick={closeFunction}>
                                <FormattedMessage
                                    id="message-form.button"
                                />
                            </button>
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