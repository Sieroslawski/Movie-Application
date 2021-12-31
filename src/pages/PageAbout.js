import Logo from '../images/tmdb-logo.svg'

function PageAbout() {
    return (
        // Display a simple about page
    <div className="about-page-wrapper">
        <section className="about-project">
            <h2 className="about-moviemania">Welcome to Movie Mania!</h2>
            <h3 className="about-title">About this project</h3>
            <p>Movie Mania is a Movie Database listing the movies based on popularity, rating, and release date. 
                Browse for your favourite film, add it to the Favourite List!</p>
        </section>
        <section className="about-ipsum">
            <h3 className="about-title">Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="not-endorsed">This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <div className="tmdb-logo">
            <img src={Logo} alt="TMDB-Logo" id="logo"/>
            </div>
        </section>
    </div>
    )
}

export default PageAbout
