import Banner from "../templates/Banner"
import AboutMe from "../templates/AboutMe"
import Education from "../templates/Education"
import Contact from "../templates/Contact"
import Skills from "../templates/Skills"
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