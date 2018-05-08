import React, { Component } from 'react';
import FilmList from '../components/FilmList';
import ShowtimesButton from '../components/ShowtimesButton';


class FilmBox extends Component {

  constructor() {
    super();
    this.state = {

      films: [
        {id: 1, name: "Life of the Party", showtimes: "showtimes"},
        {id: 2, name: "Breaking In", showtimes: "showtimes"},
        {id: 3, name: "Revenge", showtimes: "showtimes"},
        {id: 4, name: "Beast", showtimes: "showtimes"}
        {id: 5, name: "Class Rank", showtimes: "showtimes"}
        {id: 6, name: "Dark Crimes", showtimes: "showtimes"}
        {id: 7, name: "Anything", showtimes: "showtimes"}
        {id: 8, name: "Lu Over the Wall", showtimes: "showtimes"}
        {id: 9, name: "Boom for Real: The Late Teenage Years of Jean-Michel Basquiat ", showtimes: "showtimes"}
        {id: 10, name: "Always at The Carlyle", showtimes: "showtimes"}
      ]
    }
  }

  render() {
    return (
      <div className="film-box">
        <h2>UK opening this week</h2>
        <FilmList films={this.state.films} />
        <ShowtimesButton>Get Showtimes</ShowtimesButton>
      </div>
    )
  }

}

export default FilmBox;
