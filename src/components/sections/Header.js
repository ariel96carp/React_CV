import MainHeader from "../templates/MainHeader"
import { Routes, Route } from "react-router-dom"

const Header = () => {
    return (
        <Routes>
            <Route path="/" element={
                <MainHeader />
            } />
            <Route path="*" element={
                <header className="error-header"></header>
            } />
        </Routes>
    )
}

export default Header