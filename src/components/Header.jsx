import { NavLink } from "react-router-dom";
import Logo from "../assets/image/header.png"

export default function Header() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Movies", path: "/movies" }
    ]
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="#">
                            <img src={Logo} alt="Logo" width="80" height="50" className="d-inline-block align-text-top" />
                        </NavLink>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {navLinks.map((link, index) => (
                                    <li key={index} className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={link.path}>{link.name}</NavLink>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}