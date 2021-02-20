import React from 'react';
import MovieList from './MovieList';
import Search from "./Search.jsx";
import Add from "./Add.jsx";
import MovieTemplate from "./MovieTemplate.jsx";
class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state ={
      movies: [],
      searchTerm: '',

    }
    this.returnSearch = this.returnSearch.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.watchedMovie = this.watchedMovie.bind(this);
    this.filterWatched = this.filterWatched.bind(this);
    this.filterToWatched = this.filterToWatched.bind(this)
  }
 returnSearch(event){
   this.setState({
     searchTerm: event.target.value
   })
   this.setState({
     movies: this.state.filtered = this.state.movies.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase()))
   })
 }

 addMovie(title){
   this.setState({
     movies: [...this.state.movies, title]
   })
 }


 watchedMovie(value){
   event.preventDefault()
   this.setState({
     movies: this.state.movies.map((movie) => {
      if(movie.title === event.target.value) movie.watched = true;
      return movie;
      })

   })

}
 filterWatched(){
   this.setState({
     movies: this.state.movies.filtered = this.state.movies.filter(movie => movie.watched === true )
   })
 }

 filterToWatched(){
  this.setState({
    movies: this.state.movies.filtered = this.state.movies.filter(movie => movie.watched === false )
  })
}





  render() {
    return(
      <div>

        <h1>Movie List</h1>
        <Add addMovie ={this.addMovie}/>

        <Search class="search"
          term={this.state.searchTerm}
          returnSearch={this.returnSearch}/>

        <button onClick={()=> this.filterWatched()} >Watched</button>
        <button onClick={()=> this.filterToWatched()} > To Watch</button>

        <MovieList
          title = {this.state.movies}
          watchedMovie = {this.watchedMovie}/>


      </div>
    )
  };
};

export default App;