import logo from '../images/movie-projector.png'

function Footer() {
    return (
        //A simple footer
        <footer>           
            <p class="name" >&copy; Adrian Sieroslawski - SSD - 2021 <img src={logo} alt="movie-projector-logo" className="logo-footer"/></p>
        </footer>
    )
}

export default Footer
