import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link , withRouter} from "react-router-dom";
import {getTracks} from './actions/tracks'

// const menu = [
//  {
//    link: '/articles',
//    label: 'Articles'
//  },
//  {
//    link:'/contacts',
//    label:'Contacts'
//  },
//  {
//    link: '/posts',
//    label: 'Posts'
//  }
// ];

class App extends Component {
  addTrack(){

    console.log("addTrack", this.trackInput.value);
    this.props.onAddTrack( this.trackInput.value);
    this.trackInput.value = '';
  }
   deleteTrack(){

    console.log("deleteTrack", this.trackInput.value);
    this.props.onDeleteTrack( this.trackInput.value);
    this.trackInput.value = '';
  }
  findTrack(){
    console.log("findTrack", this.searchInput.value); 
    this.props.onFindTrack( this.searchInput.value); 
    this.searchInput.value = '';  
  }

  render() {

    return (
      <div>
        <div>
          <input type="text" ref={(input) => {this.trackInput = input }}></input>
          <button onClick={(event) => this.addTrack(event)} >Add track</button>
          <button onClick={(event) => this.deleteTrack(event)} >Delete track</button>
        </div>
        <div>
          <input type="text" ref={(input) => {this.searchInput = input }}></input>
          <button onClick={(event) => this.findTrack(event)} >Find tracks</button>
        </div>
        <div>
          <button onClick={this.props.onGetTracks}>Get tracks</button>
        </div>
        <ul>
          {this.props.tracks.map((track,index)=>
            <li key={index}>{track.name}</li>
          )}
        </ul> 
        <Link to="/dropdown"> dropdown</Link>          
      </div>
    );
  };
}

export default withRouter(connect(
  state =>({
    tracks : state.tracks.filter( track => (
      track.name.includes(state.filterTracks)
    ))
  }),
  dispatch => ({
    onAddTrack : (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: 'ADD_TRACK', payload });
    },
    onDeleteTrack : (trackName) => {
      dispatch({ type: 'DELETE_TRACK', payload: trackName });
    },
    onFindTrack : (trackName) => {
      dispatch({ type: 'FIND_TRACK', payload: trackName });
    },
    onGetTracks:() => {    
      dispatch( getTracks() );
    }
  }) 
)(App));
