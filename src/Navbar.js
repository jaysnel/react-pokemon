import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>Gotta Catchem All</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/pokemon/8">About</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;