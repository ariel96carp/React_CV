import Banner from "../templates/banner"
import AboutMe from "../templates/about-me"
import Education from "../templates/education"
import Contact from "../templates/contact"
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
            <Banner />
            <AboutMe />
            <Skills />
            <Education />
            <Contact />
        </>
    )
}

export default Home