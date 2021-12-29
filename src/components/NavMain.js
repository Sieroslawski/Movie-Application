import { NavLink } from 'react-router-dom';

function NavMain() {
    return (
        <nav className="nav-main">
            <ul>
            {/* Display the navigation bar */}
                <li> <NavLink to='/' exact>Home</NavLink></li>
                <li> <NavLink to='/about'>About</NavLink></li>
                <li> <NavLink to='/favs'>Favorites</NavLink></li>
                
            </ul>
        </nav>
    )
}

export default NavMain
