import React, { Component } from 'react'
import axios from 'axios'

 class Soon extends Component {

    state = {
        movies: [],
        popular: [],
        search: '',
        votes: [],
        api: '1ca88eaa9f43c3fe6943dba43a383cd7',
        inTheatres: []
    
       }

    onSoon = (e) => {
        e.preventDefault();
        axios.get(`http://api.themoviedb.org/3/discover/movie?&primary_release_date.gte=2018-05-11&primary_release_date.lte=2018-05-31&api_key=${this.state.api}&page=1`)
      //  .then((result) => console.log(result))
        .then((result) => this.setState({
        movies: [],
        popular: [],
        inTheatres: result.data.results
    }))
  
   }
  render() {
      let soon = this.state.inTheatres;
    return (
      <div className="soon">
        <button type="submit" onClick={this.onSoon}>  Soon </button>
        { 
           soon.map( (soon) => 
            <div className="movie-box">
            <img className="movie-box-image" src={"https://image.tmdb.org/t/p/w300" + soon.poster_path} alt="dog"/>
              <div className="description">
              <i className="votes">{soon.vote_average}</i>
              <p>Release date: {soon.release_date}</p>
                <h3>{soon.original_title}</h3>
                <p className="overview">{soon.overview}</p>
               
              </div>
            </div>
         )}
      </div>
    )
  }
}

export default Soon