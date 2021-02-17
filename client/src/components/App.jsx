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

 filterWatched(){

 }




  render() {
    return(
      <div>
        <h1>Movie List</h1>
        <Add addMovie ={this.addMovie}/>
        <Search class="search"
        term={this.state.searchTerm}
        returnSearch={this.returnSearch}/>
        <button>Watched</button>
        <button> To Watch</button>
        <MovieList title = {this.state.movies}/>


      </div>
    )
  };
};

export default App;