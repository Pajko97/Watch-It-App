import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js'
import './App.css';
import axios from 'axios'
import Reccomended from './components/Reccomendations/Reccomended.js';


class App extends Component {
    state = {
      name: undefined,
      poster: undefined,
      overview: undefined,
      rating: undefined
     }
    onSubmit = () => {
      
      const api = '1ca88eaa9f43c3fe6943dba43a383cd7'
      axios.get(`https://api.themoviedb.org/3/movie/549?api_key=${api}`)
      .then((result) => this.setState({
         name: result.data.original_title,
         poster: result.data.poster_path,
         overview: result.data.overview,
         rating: result.data.vote_average
      }));
    }
  
  render() {
    return (
      <div className="App">
        <Navbar 
          onSubmit={this.onSubmit}
        />
        <Reccomended
          name={this.state.name}
          poster={this.state.poster}
          overview={this.state.overview}
          rating={this.state.rating}

        />
      </div>
    );
  }
}

export default App;
