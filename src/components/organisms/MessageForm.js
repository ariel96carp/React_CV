import { Formik, Form, Field, ErrorMessage } from "formik"
import { useRef, useState } from "react"
import { useIntl } from "react-intl"
import emailjs from "emailjs-com"
import FormMessage from "../Atoms/FormMessage"
import Loader from "../Atoms/Loader"

const MessageForm = () => {
    const [ sendingMessage, setSendingMessage ] = useState(false)
    const [ sendedMessage, setSendedMessage ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState(false)
    const formModal = useRef()
    const intl = useIntl()
    
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
                    <Loader message={intl.formatMessage({
                        id: "loader.message"
                    })}/>
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
                        errors.name = intl.formatMessage({
                            id: "message.error.name"
                        })
                    }
                    if (!values.email)
                    {
                        errors.email = intl.formatMessage({
                            id: "message.error.email"
                        })
                    }
                    if (!values.message)
                    {
                        errors.message = intl.formatMessage({
                            id: "message.error.message"
                        })
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
                            <Field 
                                type="text" 
                                name="name" 
                                placeholder=
                                    {intl.formatMessage({
                                        id: "message.placeholder.name"
                                    })}
                            />
                            <ErrorMessage name="name" component={() => (
                                <p className="input-message error">{errors.name}</p>
                            )}>
                            </ErrorMessage>
                        </div>
                        <div className="input">
                            <Field 
                                type="email" 
                                name="email" 
                                placeholder=
                                    {intl.formatMessage({
                                        id: "message.placeholder.email"
                                    })}
                            />
                            <ErrorMessage name="email" component={() => (
                                <p className="input-message error">{errors.email}</p>
                            )}>
                            </ErrorMessage>
                        </div>
                        <div className="input">
                            <textarea 
                                name="message" 
                                placeholder=
                                    {intl.formatMessage({
                                        id: "message.placeholder.message"
                                    })}
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="message" component={() => (
                                <p className="input-message error">{errors.message}</p>
                            )}>
                            </ErrorMessage>
                        </div>
                        <input 
                            type="submit" 
                            value=
                                {intl.formatMessage(
                                    {id: "message.button"}
                                )} 
                            className="button"
                        />
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default MessageForm