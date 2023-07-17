import React from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com/?apikey=afec026d';

// const API_URL = 'http://www.omdbapi.com?apikey=afec026d';
const movie1 =
    { Title: 'Italian Spiderman', Year: '2007', imdbID: 'tt2705436', Type: 'movie' }

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    return (
        <div className="app">
            <h1>MoveiLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value='superman'
                    onChange={() => { }}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => { }}
                />
            </div>
            <div className="container">
                <MovieCard movie1={movie1} />
            </div>

        </div>

    );
}

export default App;