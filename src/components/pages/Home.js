import MainBanner from "../templates/Banner"
import AboutMe from "../templates/AboutMe"
import Education from "../templates/educationn"
import ContactInfo from "../templates/Contact"
import Skills from "../templates/skillss"
import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        document.body.classList.add("home-body")

        return () => {
            document.body.classList.remove("home-body")
        }
    }, [])

    return (
        <>
            <MainBanner />
            <AboutMe />
            <Skills />
            <Education />
            <ContactInfo />
        </>
    )
}

export default Home