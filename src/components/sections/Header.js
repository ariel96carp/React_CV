import { useRef, useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import { FormattedMessage } from "react-intl"

const Header = () => {
    const navMenu = useRef()
    const mainHeader = useRef()
    const headerWrapper = useRef()
    useEffect(() => {
        const updateScroll = () => {
            const menu = navMenu.current.querySelector(".menu")
            const windowscroll = window.scrollY
            if (windowscroll > 0)
            {
                if (!mainHeader.current.classList.contains("scroll-header"))
                {
                    mainHeader.current.classList.add("scroll-header")
                    headerWrapper.current.classList.add("scroll-wrapper")
                    menu.classList.add("scroll-menu")
                }
            }
            else
            {
                if (mainHeader.current.classList.contains("scroll-header"))
                {
                    mainHeader.current.removeAttribute("class")
                    headerWrapper.current.classList.remove("scroll-wrapper")
                    menu.classList.remove("scroll-menu")
                }
            }
        }

        window.addEventListener("scroll", updateScroll)
        return (() => {
            window.removeEventListener("scroll", updateScroll)
        })
    }, [])

    useEffect(() => {
        const hideMenu = () => {
            const windowWidth = window.innerWidth
            if (windowWidth > 640)
            {
                if (navMenu.current.classList.contains("show"))
                {
                    navMenu.current.classList.remove("show")
                    document.body.style.overflow = "visible"
                }
            }
        }

        window.addEventListener("resize", hideMenu)
        return (() => {
            window.removeEventListener("resize", hideMenu)
        })
    }, [])

    const toggleMenu = () => {
        navMenu.current.classList.toggle("show")
        if (navMenu.current.classList.contains("show"))
        {
            document.body.style.overflow = "hidden"
        }
        else
        {
            document.body.style.overflow = "visible"
        }
    }

    const hideMenuFromItem = () => {
        if (navMenu.current.classList.contains("show"))
        {
            navMenu.current.classList.remove("show")
            document.body.style.overflow = "visible"
        }
    }

    return (
        <header ref={mainHeader}>
            <div className="wrapper" ref={headerWrapper}>
                <HashLink 
                    to="/#bannerSection" 
                    className="title"
                    onClick={hideMenuFromItem}>
                    PORTFOLIO
                </HashLink>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className="middle"></div>
                </div>
                <nav className="nav" ref={navMenu}>
                    <ul className="menu">
                        <li className="item center-content">
                            <HashLink 
                                to="/#bannerSection" 
                                className="item" 
                                onClick={hideMenuFromItem}>
                                    <FormattedMessage
                                        id="header.home"
                                    />
                            </HashLink>
                        </li>
                        <li className="item center-content">
                            <HashLink 
                                to="/#aboutSection" 
                                className="item" 
                                onClick={hideMenuFromItem}>
                                    <FormattedMessage
                                        id="header.about"
                                    />
                                </HashLink>
                        </li>
                        <li className="item center-content">
                            <HashLink 
                                to="/#skillsSection" 
                                className="item" 
                                onClick={hideMenuFromItem}>
                                <FormattedMessage
                                    id="header.skills"
                                />
                            </HashLink>
                        </li>
                        <li className="item center-content">
                            <HashLink 
                                to="/#educationSection" 
                                className="item" 
                                onClick={hideMenuFromItem}>
                                <FormattedMessage
                                    id="header.education"
                                />
                            </HashLink>
                        </li>
                        <li className="item center-content">
                            <HashLink 
                                to="/#contactSection" 
                                className="item" 
                                onClick={hideMenuFromItem}>
                                <FormattedMessage
                                    id="header.contact"
                                />
                            </HashLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header