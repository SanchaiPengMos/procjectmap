import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import "./Gmap.css"

const AnyReactComponent = ({ text }) => <div className='i-c' > <img src={text} /> </div>;

class SimpleMap extends Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  static defaultProps = {
    center: {
      lat: 13.7245601,
      lng: 100.4930267
    },
    zoom: 3
  };

  render() {
    console.log(this.props.center)

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
      },
      {
        id:3,
        lat:16.8923038,
        lng:99.1227091
      },
      {
        id:4,
        lat:16.8947899,
        lng:99.1216698
      }
    ]

    console.log(Data)

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCKbpzk5AcL0ZJZQiaa9SIwk6PLWOP2rRU"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={13.7245601}
            lng={100.4930267}
            text="./icon/mark.png"
          /> */}
          
          {Data.map((idx) => (
            <AnyReactComponent
            lat={idx.lat}
            lng={idx.lng}
            text="./icon/mark.png"
          /> 
          ) )}

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;