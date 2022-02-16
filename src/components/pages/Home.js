import Banner from "../templates/banner"
import AboutMe from "../templates/about-me"
import Education from "../templates/education"
import Contact from "../templates/contact"
import Skills from "../templates/skills"

const Home = () => {
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