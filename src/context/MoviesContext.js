import { createContext } from "react";
import { useState, useContext } from "react";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
    const [movies, setMovies] = useState([]);

    const addMovie = (movie) => {
        setMovies((prevMovies) => [...prevMovies, movie]);
    }

    const clearMovies = () => {
        setMovies([]);
    }

    const value = {
        movies,
        addMovie,
        clearMovies
    }

    return (
        <MovieContext.Provider value = {value}>
            {children}
        </MovieContext.Provider>
    )
};

export const useMovieContext = () => {
    return useContext(useMovieContext);
}
