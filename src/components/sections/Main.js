import Banner from "./main/banner"
import AboutMe from "./main/about-me"
import Skills from "./main/skills"
import Education from "./main/education"
import Contact from "./main/contact"
import { Routes, Route } from "react-router"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={
                    <>
                        <Banner />
                        <AboutMe />
                        <Skills />
                        <Education />
                        <Contact />
                    </>
                }>
                </Route>
            </Routes>
        </main>
    )
}

export default Main