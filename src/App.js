import React from 'react';
import SearchBar from './SearchBar';
import ImagesList from './ImagesList';
import unsplash from './apis/unsplash';

class App extends React.Component{
  state = { images: [] };

  onSearchSubmit = async (searchQuery) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        'query': searchQuery,
        'per_page': 20
      }
    });
    this.setState({images: response.data.results});

  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <ImagesList images={this.state.images} />
      </div>
    )
  }
}

export default App;