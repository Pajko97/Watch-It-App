import React, { Component } from 'react'



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
        <div className="message">
            <h2>Find movies you love!</h2>
        </div>
      </div>
    )
  }
}

export default Navbar;