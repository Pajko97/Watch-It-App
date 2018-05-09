import React, { Component } from 'react'
import CSS from '/Users/axeof/Desktop/WatchIt 1.0/WatchIt/src/App.css'
import axios from 'axios'
import onPopular from './onPopular'

class Popular extends Component {

  state = {
    movies: [],
    popular: []
   }



  render() {
    let populars = this.state.popular;

    return (
      <div>
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