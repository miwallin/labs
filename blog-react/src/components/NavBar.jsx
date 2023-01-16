import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="Navbar">
            My Blog
            <NavLink to="/">Home</NavLink>
            <NavLink to="/write">Write</NavLink>
        </div>
    )
}

export default NavBar