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

  componentDidMount() {

    apiGetUser()
      .then((res) => {
    
      } )
      .catch((err) => {
        console.log("err GetUser: ", err )
      })

    apiGetLocation()
      .then((res) => {
        console.log("res Location", res.data.result )

        this.setState({
          Shop:res.data.result
        })

      })
      .catch((err) => {
        console.log("err GetLocation", err )
       } )



  }


  render() {
    // console.log(this.props.center)

    // console.log( this.state.Shop)

    // this.state.Shop.map((idx) =>{
    //   console.log(idx)
    // } )

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
    // const Data = this.state.Shop

    console.log( this.state.Shop.map((res) => console.log(res.id) )  )
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
          
          {Data.map((idx) => { 
            return(
              (
                <AnyReactComponent
                lat={idx.lat}
                lng={idx.lng}
                text="./icon/mark.png"
              /> 
              )
            )
           } )}

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;