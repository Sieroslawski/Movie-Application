import Logo from '../images/tmdb-logo.svg'

function PageAbout() {
    return (
        <section className="about-page">
            <h2>Welcome to MVDB!</h2>
            <h3>About this project</h3>
            <p>MVDB is a Movie Database listing the moviesbased on popularity, rating, and release date. 
                Browse for your favourite film, add it to the Favourite List, and save it for the Watch Later list!</p>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <div class="tmdb-logo">
            <img src={Logo} alt="TMDB-Logo" />
            </div>
        </section>
    )
}

export default PageAbout
