import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { apiGetUser } from '../../service/api/user';

import { apiGetLocation } from '../../service/api/location';

import SimpleMap from './Gmap';


export default class ToMap extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          counter: 0,
          Shop : []
        
        };
      }

      componentDidMount() {

        apiGetUser()
          .then((res) => {
        
          } )
          .catch((err) => {
            console.log("err GetUser: ", err )
          })
    
        apiGetLocation()
          .then((res) => {
    
            this.setState({
              Shop:res.data.result
            })
    
          })
          .catch((err) => {
            console.log("err GetLocation", err )
           } )
    
    
    
      }

    render(){ 

        // console.log("asdasdasdasdasdas",this.state.Shop)

        return(
            <div>
                <SimpleMap dataMap={this.state.Shop} />
            </div>
        )
    }
}