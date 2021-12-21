import { Formik, Form, Field, ErrorMessage } from "formik"
import checkImage from "../../img/cheque.png"
import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import Loader from "../../Loader/Loader"

const MessageForm = () => {
    const [ sendingMessage, setSendingMessage ] = useState(false)
    const [ sendedMessage, setSendedMessage ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState(false)
    const formModal = useRef()
    const loaderModal = useRef()
    const messageModal = useRef()
    
    const closeMessage = () => {
        formModal.current.classList.toggle("active")
        document.body.style.overflow = "visible"
        loaderModal.current.style.display = "block"
        messageModal.current.style.display = "none"
        window.scrollTo(0, 0)
    }
    
    const sendEmail = async (values) => {
        const showMessage = () => {
            loaderModal.current.style.display = "none"
            messageModal.current.style.display = "block"
        }
        const closeModal = () => {
            formModal.current.classList.toggle("active")
            document.body.style.overflow = "visible"
        }
        const templateID = process.env.REACT_APP_TEMPLATE_ID
        const serviceID = process.env.REACT_APP_SERVICE_ID
        const userID = process.env.REACT_APP_USER_ID
        try{
            const response = await emailjs.send(serviceID, templateID, values, userID)
            switch(response.status)
            {
                case 200: 
                    //showMessage()
                    setSendedMessage(true)
                    break
                default:
                    setErrorMessage(true)
                    closeModal()
                    setTimeout(() => {
                        setErrorMessage(false)
                    }, 2000)
            }
        }
        catch(e){
            setErrorMessage(true)
            closeModal()
            setTimeout(() => {
                setErrorMessage(false)
            }, 2000)
        }
    }

    return (
        <>
            <div className="modal" ref={formModal}>
                <div className="modal-content">
                    {sendingMessage && 
                        <Loader message="Escribiendo mensaje..."/>
                    }
                </div>
                {/* <div className="content l-60 m-80 s-90" ref={messageModal}>
                    <div className="icon">
                        <img src={checkImage} alt="Imagen de validación"></img>
                    </div>
                    <div className="message">
                        <h2>¡Genial!</h2>
                        <p className="center-content">
                            ¡Tu mensaje ha sido enviado exitosamente! <br></br>
                            ¡Muchas gracias por tu interés! <br></br>
                            A la brevedad estaré constestando.
                        </p>
                        <button onClick={closeMessage}>Cerrar</button>
                    </div>
                </div>
                <div className="loader-content" ref={loaderModal}>
                    <div className="loader center-block"></div>
                    <p className="message">
                        Enviando mensaje...
                    </p>
                </div> */}
            </div>
            <Formik
                initialValues={{
                    name:"",
                    email:"",
                    message:""
                }}
                validate={(values) => {
                    let errors = {}

                    if (!values.name)
                    {
                        errors.name = "Debe ingresar un nombre."
                    }
                    if (!values.email)
                    {
                        errors.email = "Debe ingresar un correo."
                    }
                    if (!values.message)
                    {
                        errors.message = "Debe ingresar un mensaje."
                    }

                    return errors
                }}
                onSubmit={(values, { resetForm }) => {
                    formModal.current.classList.toggle("active")
                    document.body.style.overflow = "hidden"
                    setSendingMessage(true)
                    // sendEmail(values)
                    // resetForm()
                }}
            >
                {({ values, errors, handleChange, handleBlur }) => (
                    <Form 
                        method="POST" 
                        className="message-form" 
                        autoComplete="off" 
                    >
                        <div className="input">
                            <Field type="text" name="name" placeholder="Nombre"></Field>
                            <ErrorMessage name="name" component={() => (
                                <p className="form-message error">{errors.name}</p>
                            )}>
                            </ErrorMessage>
                        </div>
                        <div className="input">
                            <Field type="email" name="email" placeholder="Email"></Field>
                            <ErrorMessage name="email" component={() => (
                                <p className="form-message error">{errors.email}</p>
                            )}>
                            </ErrorMessage>
                        </div>
                        <div className="input">
                            <textarea 
                                name="message" 
                                placeholder="Tu mensaje"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}>
                            </textarea>
                            <ErrorMessage name="message" component={() => (
                                <p className="form-message error">{errors.message}</p>
                            )}>
                            </ErrorMessage>
                        </div>
                        <input type="submit" value="Enviar" className="button"></input>
                        {/* {errorMessage && 
                            <p className="center-content error">
                                Ups... el mensaje no pudo ser enviado. <br></br>
                                Por favor inténtelo de vuelta más tarde.
                            </p>
                        } */}
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default MessageForm