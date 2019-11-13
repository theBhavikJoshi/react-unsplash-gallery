import React from 'react';

class SearchBar extends React.Component{
  state = { searchTerm: 'flies' };

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchTerm);
  }


  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Text</label>
            <input type="text" value={this.state.searchTerm} onChange={(e) => this.onInputChange(e)}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;