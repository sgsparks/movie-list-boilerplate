import React from 'react';

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
      <form>
       <input
         name = "title"
         type = "text"
         value = {this.state.title}
         onChange = {this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add Movie</button>
      </form>
    );
  }
}

export default Add;