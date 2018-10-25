import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {
 constructor(props){
   super(props);
}
render() {


    return (
  <div className="TrackList">
          {
            this.props.tracks.map(track => {
             return <Track track=
             {track} onAdd=
             {this.props.onAdd}
             onRemove=
             {this.props.onRemove}
             isRemoval=
             {this.props.onRemove}
              />

           })
          }
      </div>

    );
  }
  }
export default TrackList;
