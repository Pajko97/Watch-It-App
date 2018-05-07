import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import './App.css';
import axios from 'axios'
import Movie from './components/Reccomendations/Reccomended.js';


class App extends Component {
    state = {
      movies: [],
     }
    onSubmit = (e) => {
    
      e.preventDefault();
      const search = e.target.elements.search.value;
      const api = '1ca88eaa9f43c3fe6943dba43a383cd7'
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${search}`)
      .then((result) => this.setState({
        movies:result.data.results,
        value: search
      })
      
      
    )
  }
 
      
    

    
  
  render() {
    let movies = this.state.movies;

    return (
      <div className="App">
 
        <Navbar 
          onSubmit={this.onSubmit}
          
        />
         {
           movies.map( movie => 
            <div className="movie-box">
            <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt="dog"/>
              <div className="description">
                <h2>{movie.original_title}</h2>
                <p>{movie.overview}</p>
                <i className="votes">{movie.vote_average}</i>
                <p>Release date: {movie.release_date}</p>
              </div>
            </div>
         )}
        
      </div>
    );
  }
}

export default App;
