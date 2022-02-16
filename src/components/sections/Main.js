import Home from "../pages/Home"
import { Routes, Route } from "react-router"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={
                    <Home />
                }>
                </Route>
            </Routes>
        </main>
    )
}

export default Main