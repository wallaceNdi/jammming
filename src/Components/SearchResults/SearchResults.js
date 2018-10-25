import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';


class SearchResults extends React.Component {


   render(){
     return(
       <div className="searchResults">
  <h2>Results</h2>
  <TrackList track = {this.props.searchResults}
  onAdd={this.props.addTrack} isRemoval={false} />
</div>
     )
   }
 }
export default SearchResults;
