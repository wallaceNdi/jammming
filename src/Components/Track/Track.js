import React from 'react';
import './Track.css ';


class Track extends React.Component {


  renderAction() {
  if (this.props.isRemoval) {
    return '-'
  }else {return '+'}



   render(){
     return(
       <div className="Track">
  <div className="Track-information">
    <h3><{this.props.track.name}></h3>
    <p><{this.props.track.artist}> | <{
    }></p>
  </div>
  <a className="Track-action"><!-- + or - will go here --></a>
</div>
     )
   }
 }
 export default Track;
