import Home from "../pages/Home"
import Error404 from "../pages/Error404"
import { Routes, Route, useLocation } from "react-router"
import classNames from "classnames"

const Main = () => {
    const location = useLocation()
    const pathname = location.pathname
    
    const mainClassName = classNames({
        "home-main": pathname === "/",
        "error-main": pathname !== "/"
    })
    
    return (
        <main className={mainClassName}>
            <Routes>
                <Route path="/" element={
                    <Home />
                } />
                <Route path="*" element={
                    <Error404 />
                } />
            </Routes>
        </main>
    )
}

export default Main