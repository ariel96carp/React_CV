import MainBanner from "../templates/MainBanner"
import AboutMe from "../templates/AboutMe"
import Education from "../templates/education"
import ContactInfo from "../templates/ContactInfo"
import Skills from "../templates/skills"
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