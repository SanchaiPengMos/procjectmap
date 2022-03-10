import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { apiGetUser } from '../../service/api/user';

import { apiGetLocation } from '../../service/api/location';

import "./Gmap.css"

const AnyReactComponent = ({ text }) => <div className='i-c' > <img src={text} /> </div>;

class SimpleMap extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      counter: 0,
      Shop : ""
    
    };
  }

  static defaultProps = {
    center: {
      lat: 13.7245601,
      lng: 100.4930267
    },
    zoom: 3
  };



  render() {

    const Data = [
      {
        id:1,
        lat:13.7245601,
        lng:100.4920267
      },
      {
        id:2,
        lat:13.7527239,
        lng:100.4506711
      }
    ]
    const localMap = this.props.dataMap.map(item => {
      return (
        <AnyReactComponent
          key={item['id']}
          lat={item['lat']}
          lng={item['lng']}
           text="./icon/mark.png"
        />
      );
    });

    return (
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCKbpzk5AcL0ZJZQiaa9SIwk6PLWOP2rRU"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {localMap}
        </GoogleMapReact>
      </div>
      
      )
}
}

export default SimpleMap;