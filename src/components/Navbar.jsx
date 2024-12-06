
import logo from '/src/assets/logo.svg';


const Navbar = () => {
    return (
    <nav className="navbar">
        <ul className="navbar-logo">
            <img className="logo" src={logo} alt="logo" />
            <li className="navbar-item"><a href="#Database">Database</a></li>
            <li className="navbar-item"><a href="#Database">Outreach</a></li>
            <li className="navbar-item"><a href="#Database">Ahrefs</a></li>
            <li className="navbar-item"><a href="#Database">DropDomains</a></li>
        </ul>
    </nav>
);
};
export default Navbar;