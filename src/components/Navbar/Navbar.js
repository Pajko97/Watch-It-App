import React, { Component } from 'react'
import CSS from '../Navbar/Navbar.css'
import axios from 'axios'


class Navbar extends Component {
  
  render() {
    return (
      <div className="Navbar" onLoad={this.props.onRated}>
        <div className="logo">
            <h1>WatchIt</h1>
        </div>
        <div className="search-input">
            <form onSubmit={this.props.onChange} onChange={this.props.onChange}>
            <input type="text" name="search" placeholder="Search"/>
            </form>      
        </div>
      </div>
    )
  }
}

export default Navbar;