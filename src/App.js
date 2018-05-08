import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import './App.css';
import axios from 'axios'
import Movie from './components/Reccomendations/Reccomended.js';


class App extends Component {
    state = {
      movies: [],
      popular: []
     }


  onPopular = (e) => {
    const apis = '1ca88eaa9f43c3fe6943dba43a383cd7'
    e.preventDefault();
    axios.get(`http://api.themoviedb.org/3/discover/movie?&sort_by=vote_average.desc&api_key=${apis}&page=1`)
    .then((result) => this.setState({
      movies: [],
      popular: result.data.results
    }))
  }

  onChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    this.setState({[e.target.name] : e.target.value,}, () => {
      if (val === "") {
        this.setState({movies: [], popular:[]});

    }
  
    else {
 // const search = e.target.elements.search.value;
      const api = '1ca88eaa9f43c3fe6943dba43a383cd7'
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${val}`)
      .then((result) => this.setState({
        movies:result.data.results,
        value: val,
        sortVote:'',
        sortRating: ''
      })
    )
    }
  });
  }
  

  render() {
    let movies = this.state.movies;
    let populars = this.state.popular;

    return (
      <div className="App">
 
        <Navbar 
          onSubmit={this.onSubmit}
          popular={this.onPopular}
          onChange={this.onChange}
          
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
        
         {
           populars.map( (popular) => 
            <div className="movie-box">
            <img src={"https://image.tmdb.org/t/p/w300" + popular.poster_path} alt="dog"/>
              <div className="description">
                <h2>{popular.original_title}</h2>
                <p>{popular.overview}</p>
                <i className="votes">{popular.vote_average}</i>
                <p>Release date: {popular.release_date}</p>
              </div>
            </div>
         )}
      </div>
    );
  }
}

export default App;
