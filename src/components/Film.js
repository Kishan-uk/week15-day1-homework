import React, { Component } from 'react';

class Film extends Component {

  render() {
    return (<div>
      <h2>{this.props.name}</h2>
      <p>Showtimes</p>
    </div>)
  }
}

export default Film;
