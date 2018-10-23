import React from 'react';
import './SearchBar.css';


 class SearchBar extends React.Component {
   constructor(props){
     super(props)
     this.search = this.search.bind(this);
   }


search(event){
  this.props.onSearch(this.props.Search)
}

render(){
  return(
    <div className="searchBar">
  <input placeholder="Enter A Song, Album, or Artist" />
  <a>SEARCH</a>
</div>
  )
}
}
export default searchBar;
