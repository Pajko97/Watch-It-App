import React, { Component } from 'react'
import CSS from '/Users/axeof/Desktop/WatchIt 1.0/WatchIt/src/App.css'

class Movie extends Component {
  render() {

    return (
      <div>
        <div className="movie">
        <img src={this.props.poster}></img>
          <div className="description">
            <h1>{this.props.name}</h1>
            <p>{this.props.overview}</p>
          {this.props.rating && <p>Rating: {this.props.rating}</p> }
          {this.props.released && <p>Release date : {this.props.released}</p>}
         
            

          </div>
        </div>
      </div>
    )
  }
}

export default Movie;