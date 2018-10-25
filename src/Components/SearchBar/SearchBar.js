import React from 'react';
import './SearchBar.css';


 class SearchBar extends React.Component {
   constructor(props){
     super(props)
     this.search = this.search.bind(this);
     this.handleTermChange = this.handleTermChange.bind(this);
   }


search(event){
  this.props.onSearch(this.props.Search)
}

handleTermChange(event){
  this.setState({searchBar:event.target.value})
}

render(){
  return(
    <div className="searchBar">
  <input placeholder="Enter A Song, Album, or Artist"
   onChange={this.props.handleTermChange} />
  <a>SEARCH</a>
</div>
  )
}
}
export default SearchBar;
