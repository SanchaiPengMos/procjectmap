import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


import { Link } from 'react-router-dom'

import { apiGetUser } from '../../service/api/user';

import { apiGetLocation } from '../../service/api/location';

import DetailShop from "../Toshop/DetailShop"
import Nav from '../nav/nav';


import "./Gmap.css"

const AnyReactComponent = ({ text,idshop }) => <div className='i-c'> 
    {/* <img  
      src={text} 
      onClick={ () => {
        <DetailShop ids={idshop} />
        // window.location.href = `/detail?ids=${idshop}`
        console.log("ids :", idshop )
      } }
      />  */}
      <Link
        to={ `/detail?idshop=${idshop}`}
        >
          <img  
            src={text} 
          />
        </Link>
      </div>;

const markerStyle = {
  position: "absolute"
};

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
    zoom: 4
  };

  MapShop( Data ){
    console.log("--->",  Data)
  }

  handleMarkerClick = () => {
    console.log("cilck")
  };
 
  render() {

    const localMap = this.props.dataMap.map(item => {
      return (
        <AnyReactComponent
          key={item['id']}
          lat={item['lat']}
          lng={item['lng']}
          idshop={item.id_user}
          text="./icon/mark.png"
        />
      );
    });

    // const renderMarkers = (map, maps) => {
    //   let marker = new maps.Marker({
    //    position: { lat: 13.7245601, lng: 100.4930267 },
    //    map,
    //    title: 'Hello World!'
    //    });
    //    return marker;
    //  };

    return (
      <div>
        <Nav />
        <div style={{ height: '100vh', width: '100%' }} >
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCKbpzk5AcL0ZJZQiaa9SIwk6PLWOP2rRU"}}
            defaultCenter={{ lat: 13.7245601, lng: 100.4930267 }}
            defaultZoom={10}
            // onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}

            // onClick
            // onClick={ () => { console.log("123456") } }
          >
                   {/* <Marker lat={13.7245601} lng={100.4930267} /> */}

            {localMap}
          </GoogleMapReact>
        </div>
      </div>
      
      )
}
}

export default SimpleMap;