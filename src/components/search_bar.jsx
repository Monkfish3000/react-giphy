import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }
  render() {
    return (
      <input id="inputID" type="text" placeholder="Search gif..." className="form-control form-search"
      onChange={this.handleUpdate} />

      );
  }
}





export default SearchBar;
