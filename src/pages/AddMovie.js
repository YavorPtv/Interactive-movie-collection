import { useState } from "react";
import { useMovieContext } from "../context/MoviesContext";

export default function AddMovie(){
    const addMovie = useMovieContext();
    const [movieDetails, setMovieDetails] = useState({
        title: '',
        year: '',
        genre: '',
        director: '',
        actors: '',
        plot: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMovieDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        addMovie(movieDetails);
    }

    return (
        <div>
            <h2>Add a New Movie</h2>

            {/* Input for Title */}
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={movieDetails.title}
                    onChange={handleChange}
                />
            </label>

            {/* Input for Year */}
            <label>
                Year:
                <input
                    type="text"
                    name="year"
                    value={movieDetails.year}
                    onChange={handleChange}
                />
            </label>

            {/* Input for Genre */}
            <label>
                Genre:
                <input
                    type="text"
                    name="genre"
                    value={movieDetails.genre}
                    onChange={handleChange}
                />
            </label>

            {/* Input for Director */}
            <label>
                Director:
                <input
                    type="text"
                    name="director"
                    value={movieDetails.director}
                    onChange={handleChange}
                />
            </label>

            {/* Button to add the movie */}
            <button onClick={handleSubmit}>Add Movie</button>
        </div>
    )
}
