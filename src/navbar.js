import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Lab1</Link> {/* Updated to Link component */}
            </div>
            <ul className="navbar-links">
                <li><Link to="/headingsandpara">Headings and Paragraphs</Link></li> {/* Updated to Link component */}
                <li><Link to="/lists">Lists</Link></li> {/* Updated to Link component */}
                <li><Link to="/forms">Forms</Link></li> {/* Updated to Link component */}
            </ul>
        </nav>
    );
}

export default Navbar;
