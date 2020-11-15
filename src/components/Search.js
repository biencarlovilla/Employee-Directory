import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="form-box">

        <form className="form-group" onSubmit={e => {e.preventDefault();}}>

          <label htmlFor="emailSearch">Search:&nbsp;</label>
          <input value={this.props.searchTerm} onChange={this.props.handleInputChange} name="search" type="text" className="form-control-lg" placeholder="search by name"/>

        </form>

      </div>
    );
  }
}

export default Search;