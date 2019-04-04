import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };
  
  export class MapContainer extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
           lat: 9.0269903,
           lng: 7.5767723
          }}
        />
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyA5bbuWecqbhqZDS3Q0T9ikNqn-j14UmOQ'
  })(MapContainer);