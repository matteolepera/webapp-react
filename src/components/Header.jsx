import { NavLink } from "react-router-dom";

export default function Header() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Movies", path: "/movies" }
    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
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
        </>
    )
}