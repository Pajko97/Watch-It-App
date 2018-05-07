import React, { Component } from 'react'
import CSS from '../Navbar/Navbar.css'
import axios from 'axios'

class Navbar extends Component {
  
  render() {
    return (
      <div className="Navbar">
        <div className="logo">
            <h1>WatchIt</h1>
        </div>
        <div className="search">
            <form onSubmit={this.props.onSubmit}>
            <input type="text" name="search" placeholder="Search"/>
            <button type="submit" >Search</button>
            </form>
            <ul className="drop-menu">
              <li>Genre
                <li>Action</li>
                <li>Sci-fi</li>
                <li>Thriller</li>
                <li>Comedy</li>
                <li>Romantic</li>
                <li>Documentary</li>
              </li>
            </ul>

            <ul className="drop-menu">
              <li>Sort by
                <li>IMDB rating</li>
                <li>Date added</li>
                <li>Popularity</li>
                </li>
            </ul>
            
        </div>
      </div>
    )
  }
}

export default Navbar;