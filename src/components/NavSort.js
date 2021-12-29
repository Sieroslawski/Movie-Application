import Dropdown from 'react-bootstrap/Dropdown';


function NavSort() {
    return (
        // Display the dropdown menu using bootstrap for sorting movies by popular, top-rated, now-playing and upcoming
        <div className="nav-sort">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort Movies
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/sort/popular">Popular</Dropdown.Item>
                    <Dropdown.Item href="/sort/top-rated">Top Rated</Dropdown.Item>
                    <Dropdown.Item href="/sort/now-playing">Now Playing</Dropdown.Item>
                    <Dropdown.Item href="/sort/upcoming">Upcoming</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    )
}

export default NavSort
