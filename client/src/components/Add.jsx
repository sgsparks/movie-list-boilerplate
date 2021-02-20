import React from 'react';
import MovieTemplate from './MovieTemplate.jsx'

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      watched: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange (event) {
    event.preventDefault()
    this.setState({
      title: event.target.value
    })

  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.addMovie(this.state);
  }




  render() {
    return(
      <div>
      <form>
       <input
         name = "title"
         type = "text"
         value = {this.state.title}
         onChange = {this.handleChange}
        />
        <button
          onClick={this.handleSubmit}>
          Add Movie
        </button>
      </form>

      </div>
    );
  }
}

export default Add;