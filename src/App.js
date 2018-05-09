import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import './App.css';
import axios from 'axios'
import Popular from './components/Popular/Popular'


class App extends Component {
    state = {
      movies: [],
      popular: [],
      votes: [],
      search: '',
      api: '1ca88eaa9f43c3fe6943dba43a383cd7'

     }

                      // Best average rated movies
  
                      // Movies with most votes
  onVotes = (e) => {
    this.setState({search:'discover/movie?&sort_by=vote_average.desc' })
    e.preventDefault();
    axios.get(`http://api.themoviedb.org/3/${this.state.search}&api_key=${this.state.api}&page=1`)
    .then((result) => this.setState({
      movies: [],
      popular: result.data.results
    }))
  }
              // Search method that handle changes
  onChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    this.setState({[e.target.name] : e.target.value,}, () => {
      if (val === "") {
        this.setState({movies: [], popular:[]});

    } else {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.state.api}&query=${val}`)
      .then((result) => this.setState({
        movies:result.data.results,
        value: val,
        popular: []
      })
    )
    }
  });
  }

  /* onRated = () => {
    this.setState({search:'discover/movie?&sort_by=vote_average.desc' })
    axios.get(`http://api.themoviedb.org/3/${this.state.search}&api_key=${this.state.api}&page=1`)
    .then((result) => this.setState({
      movies: [],
      popular: result.data.results
    }))
   } */
  

  render() {
    let movies = this.state.movies;

    return (
      <div className="App">
        <Navbar 
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
        
         <Popular
         onRated={this.onRated}
         movies={this.state.movies}
         popular={this.state.popular}
         votes={this.state.votes}
         search={this.state.search}
         api={this.state.api}
         />
         
      </div>
    );
  }
}

export default App;
