import React from 'react';

var Search = (props) => (
  <div>
  <form>
    <input name = "search"
      type = "text"
      value={props.searchTerm}
      onChange={props.returnSearch}>
    </input>
    <button type = "button"> Search </button>
  </form>
  </div>
)

export default Search;