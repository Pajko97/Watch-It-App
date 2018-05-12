import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import './App.css';
import axios from 'axios'
import Popular from './components/Popular/Popular'
import Soon from './components/Soon/Soon'


class App extends Component {
    state = {
      movies: [],
      popular: [],
      votes: [],
      search: '',
      api: '1ca88eaa9f43c3fe6943dba43a383cd7'

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
        popular: undefined,
        soon: undefined
      })
    )
    }
  });
  }



  render() {
    let movies = this.state.movies;

    return (
      <div className="App">
        <Navbar 
          onChange={this.onChange}
        />
        <div className="search">

        {  
           movies.map( movie => 
            <div className="movie-box-search">
            <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt="dog"/>
              <div className="description">
                <h2>{movie.original_title}</h2>
                <p className="overview-search">{movie.overview}</p>
                <i className="votes">{movie.vote_average}</i>
                <p>Release date: {movie.release_date}</p>
              </div>
            </div>
            
         )}
        </div>
         <Popular
         />
         <Soon/>
      </div>
    );
  }
}

export default App;
