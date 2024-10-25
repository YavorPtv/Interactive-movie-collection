import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Movie Finder</h1>
            <p>Discover detailed information about your favorite movies!</p>
            
            <h2>How to use:</h2>
            <ul>
                <li>Go to the <strong>Movie Details</strong> page and enter the title of a movie to get details like genre, director, actors, and more.</li>
                <li>You can also specify a year to narrow down your search.</li>
            </ul>

            {/* Links to navigate */}
            <div style={{ marginTop: '20px' }}>
                <Link to="/movie-details">
                    <button>Search for Movies</button>
                </Link>
                <Link to="/add-movie" style={{ marginLeft: '20px' }}>
                    <button>Add a Movie</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;