import { Formik, Form, Field, ErrorMessage } from "formik"
import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import Loader from "../../Loader/Loader"
import FormMessage from "../../FormMessage/FormMessage"

const MessageForm = () => {
    const [ sendingMessage, setSendingMessage ] = useState(false)
    const [ sendedMessage, setSendedMessage ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState(false)
    const formModal = useRef()
    
    const closeMessage = (sendedMessage) => {
        formModal.current.classList.toggle("active")
        document.body.style.overflow = "visible"
        if (sendedMessage === true)
        {
            setSendedMessage(false)
        }
        else
        {
            setErrorMessage(false)
        }
        window.scrollTo(0, 0)
    }
    
    const sendEmail = async (values) => {
        const templateID = process.env.REACT_APP_TEMPLATE_ID
        const serviceID = process.env.REACT_APP_SERVICE_ID
        const userID = process.env.REACT_APP_USER_ID
        try{
            const response = await emailjs.send(serviceID, templateID, values, userID)
            switch(response.status)
            {
                case 200: 
                    setSendingMessage(false)
                    setSendedMessage(true)
                    break
                default:
                    setSendingMessage(false)
                    setErrorMessage(true)
            }
        }
        catch(e){
            setSendingMessage(false)
            setErrorMessage(true)
        }
    }

    return (
        <>
            <div className="modal" ref={formModal}>
                {sendingMessage && 
                    <Loader message="Escribiendo mensaje..."/>
                }
                {sendedMessage &&
                    <FormMessage 
                        sendedMessage={true} 
                        closeFunction={() => closeMessage(true)}
                    />
                }
                {errorMessage &&
                    <FormMessage 
                        sendedMessage={false} 
                        closeFunction={() => closeMessage(false)}
                    />
                }
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
                    sendEmail(values)
                    resetForm()
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
                                <p className="input-message error">{errors.name}</p>
                            )}>
                            </ErrorMessage>
                        </div>
                        <div className="input">
                            <Field type="email" name="email" placeholder="Email"></Field>
                            <ErrorMessage name="email" component={() => (
                                <p className="input-message error">{errors.email}</p>
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
                                <p className="input-message error">{errors.message}</p>
                            )}>
                            </ErrorMessage>
                        </div>
                        <input type="submit" value="Enviar" className="button"></input>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default MessageForm