import React from 'react';
import Add from './Add.jsx'


var MovieTemplate = (props) => (
     <li >
     {props.movie}

     <button
      value={props.movie}
      onClick={()=> props.watchedMovie()}
    > Watched
    </button>
    </li>


  )

  export default MovieTemplate;