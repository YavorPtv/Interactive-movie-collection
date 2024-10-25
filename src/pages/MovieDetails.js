import { useState } from "react"

function MovieDetails(){
    const [movieTitle, setTitle] = useState('');
    const [movieYear, setYear] = useState('');
    const [movieData, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchMovieData = async () => {
        try{
            const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&y=${movieYear}&apikey=36e323ba`);
            const data = await response.json();
            if (data.Response === 'True'){
                setData(data);
                setError(null);
            }
            else{
                setData(null);
                setError(data.Error);
            }
        }
        catch(error){
            setError('An error occurred while fetching the data.');
        }
    }

    const handleSearch = () => {
        if (movieTitle.trim() !== ''){
            fetchMovieData();
        }
        else{
            setError('Please enter a movie title.');
        }
    }

    return (
        <div>
            <h1>Movie Search</h1>

            <div>   
                <input type="text" value={movieTitle} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" value={movieYear} onChange={(e) => setYear(e.target.value)}/>
                <button onClick={handleSearch}>Search for movie</button>
            </div>
            
            {error && <p style={{color: 'red'}}>{error}</p>}

            {movieData && (
                <div>
                    <h2>{movieData.Title} ({movieData.Year})</h2>
                    <p><strong>Genre:</strong> {movieData.Genre}</p>
                    <p><strong>Director:</strong> {movieData.Director}</p>
                    <p><strong>Actors:</strong> {movieData.Actors}</p>
                    <p><strong>Plot:</strong> {movieData.Plot}</p>
                    <img src={movieData.Poster} alt={movieData.Title} />
                </div>
            )}
        </div>
    )
}

export default MovieDetails;