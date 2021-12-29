import { Link } from 'react-router-dom';
import NavMain from './NavMain';

function Header() {
    return (
        //A header for displaying the link that redirects to home
        //NavMain component for displaying the navbar
        <header>
            <h1><Link to="/">Movie Mania</Link></h1>
            <NavMain />
        </header>
    )
}

export default Header
