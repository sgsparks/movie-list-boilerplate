import React from 'react';
import MovieTemplate from './MovieTemplate.jsx'
var MovieList = (props) => (
  <div className = 'title'>
    <ul> <h2>List</h2>

     {props.title.map((title, idx) => <MovieTemplate key={idx} movie = {title}/>)}
    </ul>
  </div>
 )



export default MovieList;