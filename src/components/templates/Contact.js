import MessageForm from "../organisms/MessageForm"
import Map from "../Atoms/Map"
import WhatsappLink from "../Atoms/WhatsappLink"
import { useRef, useEffect } from "react"
import { FormattedMessage } from "react-intl"

const Contact = () => {
    const contactSection = useRef()
    const whatsappRef = useRef()
    useEffect(() => {
        const toggleWhatsappLink = () => {
            const headerSizeString = getComputedStyle(document.documentElement).getPropertyValue("--header-size")
            const headerSizeNumber = Number(headerSizeString.replace("rem", ""))
            const contactOffsetTop = contactSection.current.offsetTop
            const documentScrollTop = document.documentElement.scrollTop + (headerSizeNumber * 16)
            if (documentScrollTop >= contactOffsetTop - 1)
            {
                if (!whatsappRef.current.classList.contains("show"))
                {
                    whatsappRef.current.classList.add("show")
                }
            }
            else
            {
                if (whatsappRef.current.classList.contains("show"))
                {
                    whatsappRef.current.classList.remove("show")
                }
            }
        }

        window.addEventListener("scroll", toggleWhatsappLink)
        return () => {
            window.removeEventListener("scroll", toggleWhatsappLink)
        }
    }, [])

    return (
        <section className="contact section-padding" id="contactSection" ref={contactSection}>
            <WhatsappLink ref={whatsappRef} />
            <div className="wrapper">
                <h2 className="title center-content">
                    <FormattedMessage
                        id="contact.title"

                    />
                </h2>
                <p className="description center-content">
                    <FormattedMessage
                        id="contact.description"
                    />
                </p>
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>
                            <FormattedMessage
                                id="contact.info"
                            />
                        </h2>
                        <div className="contact-box">
                            <div className="detail">
                                <div className="detail-image"></div>
                                <div className="description">
                                    <h3 className="type">
                                        <FormattedMessage
                                            id="contact.address"
                                        />
                                    </h3>
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
                                    <h3 className="type">
                                        <FormattedMessage
                                            id="contact.phone"
                                        />
                                    </h3>
                                    <p className="info">1168922029</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="detail">
                                <div className="detail-image"></div>
                                <div className="description">
                                    <h3 className="type">
                                        <FormattedMessage
                                            id="contact.email"
                                        />
                                    </h3>
                                    <p className="info">arielcarp1996@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-box">
                            <h3 className="type">
                                <FormattedMessage
                                    id="contact.repository"
                                />
                            </h3>
                            <a 
                                href="https://github.com/ariel96carp/React_CV" 
                                target="_blank"
                                rel="noreferrer">
                            https://github.com/ariel96carp/React_CV</a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h2>
                            <FormattedMessage
                                id="contact.message"
                            />
                        </h2>
                        <MessageForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact