import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import Searchimg from './search.svg';

//7c87b483

const API_URL = 'http://www.omdbapi.com?apikey=7c87b483';

const movie1 =
    {
        "Title": "Eragon",
        "Year": "2006",
        "imdbID": "tt0902280",
        "Type": "game",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2Q2OTIzNWYtN2E3My00NDI1LThiMTQtMjM3OWIzMmY2Y2JjXkEyXkFqcGdeQXVyOTQxNzM2MjY@._V1_SX300.jpg"
      }

const App= () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
}

useEffect( () =>{
    searchMovies("Eragon");

}, []);
    return(
      <div className= "app">
        <h1>Movie Land</h1>
        <div className="search">
            <input 
            placeholder='search for movies'
            value={ searchTerm }
            onChange={ (e) => setSearchTerm(e.target.value)}
            />
            <img 
            src = { Searchimg }
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            
            />

    </div>
    
    
    {
        movies?.length > 0
            ?(
                <div className = "container">
                    { movies.map((movie) => (
                        <MovieCard movie ={ movie}  />
                    ))}
                
                </div>
    
           
            ):(
                <div className = "empty">
                    <h2>No movies found</h2>
                </div>
            ) 
    }
    
       
    </div>
    );
}

export default App;