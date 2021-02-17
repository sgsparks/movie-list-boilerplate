import React from 'react';


class MovieTemplate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      watched: false
    };
  }

  watchedMovie(){
    this.setState({
      watched: true
    })
  }



    render() {
      var watchedText;
      if(this.state.watched === false){
        watchedText = "To Watch"
      } else {
        watchedText = "Watched"
      }
      const {movie} = this.props;

      return(

     <li >
       {console.log("watched state ", this.state.watched)}
       {movie.title}
     <button
     onClick={()=> this.watchedMovie()}
    > {watchedText}
    </button>
    </li>
      );
    }
  }

  export default MovieTemplate;