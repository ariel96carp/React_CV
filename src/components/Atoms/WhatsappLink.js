import whatsappImage from "../img/whatsapp.png"
import { forwardRef } from "react"

const WhatsappLink = forwardRef(( props, ref ) => {
    return (
        <div className="whatsapp-link" ref={ref}>
            <a 
                href="https://walink.co/aca9e1" 
                target="_blank"
                rel="noreferrer">
                <img src={whatsappImage} alt="Logo de Whatsapp"></img>
            </a>
        </div>
    )
})

export default WhatsappLink