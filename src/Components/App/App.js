import React, { Component } from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify.js';

class App extends Component {
constructor(props){
  super(props);

  this.state ={
    searchResults:[
      {"name": "name1",
      "artist": "artist1",
      "album": "album1",
      "id" : 1}
    ],
    playlistTitle: "title",
    playlistTracks: [
           {
             "name": "name1",
             "artist": "artist1",
             "album": "album1",
             "id" : 1
           },
           {
             "name": "name2",
             "artist": "artist2",
             "album": "album2",
             "id" : 2
           },
   ]

  }
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist= this.savePlaylist.bind(this);
  this.search=this.search.bind(this);
}

addTrack(track){
  if (this.state.playlistTracks.find(savedTrack =>
    savedTrack.id === track.id)) {
  return;
}else{
this.setState(prevState =>
  ({playlistTracks: [...prevState.playlistTracks, track]
}));
}
};

removeTrack(track){
  if (this.state.playlistTracks.find(savedTrack =>
    savedTrack.id === track.id)) {
  return;
}else{
this.setState(prevState =>
  ({playlistTracks: [...prevState.playlistTracks, track]
}));
}
}
updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist(){
const trackUris =
this.state.playlistTracks.map(track => track.uri)
Spotify.savePlaylist(this.state.playlistName, trackUris).then(() =>
 {
   this.setState({
   playlistName: 'New Playlist',
   playlistTracks: []
    });
  });
  }

  search(term) {
      Spotify.search(term).then(searchResults => {
        this.setState({searchResults: searchResults});
      });
    }


  render(){
    return (
      <div>
<h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <searchBar onSearch={this.search} />
    <div className="App-playlist">
      <SearchResults searchResults = {this.state.searchResults} onAdd={this.addTrack}/>
      <Playlist playlistName ={this.state.playlistName} playlistTracks =
      {this.state.playlistTracks} onRemove={this.state.removeTrack}
      onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
    </div>
  </div>
</div>

    );
  }
}

export default App;
