import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    const options = {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    };
    new google.maps.Map(this.refs.map, options);
  }

  render() {
    // this.refs.map
    return <div ref="map" className="map" />
  }
}

export default GoogleMap;
