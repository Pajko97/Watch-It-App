import React, { Component } from 'react'
import axios from 'axios'


class Popular extends Component {

  state = {
    movies: [],
    popular: [],
    search: '',
    votes: [],
    api: '1ca88eaa9f43c3fe6943dba43a383cd7'

   }

   onRated = (e) => {
    this.setState({search:'discover/movie?&sort_by=vote_average.desc' })
    e.preventDefault();
    axios.get(`http://api.themoviedb.org/3/${this.state.search}&api_key=${this.state.api}&page=1`)
    .then((result) => this.setState({
      movies: [],
      popular: result.data.results
    }))
   }

  render() {
    let populars = this.state.popular;
    return (
      <div>
      <button type="submit" onClick={this.onRated}>Popular</button>
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
    )
  }
}

export default Popular;