import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import logo from '../images/movie-projector.png'

function Header() {
    return (
        //A header for displaying the link that redirects to home
        //NavMain component for displaying the navbar
        <header>
            <h1 className="movie-mania"><Link to="/">Movie Mania <img src={logo} alt="movie-projector-logo" className="logo"></img></Link></h1>           
            <NavMain />
        </header>
    )
}

export default Header
