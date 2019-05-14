import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Strar Wars"
]

const movieImages = [
  "https://assets.www.warnerbros.com/sites/default/files/movies/media/browser/Matrix_2000x3000.JPEG",
  "https://i.pinimg.com/736x/36/1e/cd/361ecdb85a3767f70810cbe2cdaaf1a4.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg",
  "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg"
]

const movies =[
  {
    title: "Matrix",
    poster: "https://assets.www.warnerbros.com/sites/default/files/movies/media/browser/Matrix_2000x3000.JPEG"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://i.pinimg.com/736x/36/1e/cd/361ecdb85a3767f70810cbe2cdaaf1a4.jpg"
  },
  {
    title: "Oldboy",
    poster:  "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Oldboy_2013_film_poster.jpg/220px-Oldboy_2013_film_poster.jpg"
  },
  {
    title: "Strar Wars",
    poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg"
  }
]
class App extends Component {

  render() {
    return (
      <div className="App">
        {movies.map((movie, index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}
export default App;
