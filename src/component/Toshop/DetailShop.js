import React, { Component } from 'react';

import { apiSearchShop } from '../../service/api/mshop';
import Nav from '../nav/nav';

import "./DtailShop.css"
export default class DetailShop extends Component {
    state = { 
        dataShop : {}
     } 

    componentDidMount(){
        console.log(" ids  : ", this._useQueryString().id )

        apiSearchShop(this._useQueryString().id)
        .then((res) => {
            // console.log("res :", res.data.result )
            this.setState({
                dataShop : res.data.result
            })
        } )
        .catch((err) => {
            console.log("err :", err )
        } )

    }

    _useQueryString = () => {
        const params = new URLSearchParams(this.props.location.search);
        const payload = {
          id: params.get("idshop"),
        };
        return payload;
      };

    render() { 

        console.log("OBJshopmanagement :", this.state.dataShop )

        // let url = `https://www.google.com/maps/@${this.state.dataShop.lat},${this.state.dataShop.lng},7z`
        let url = `https://www.google.com/maps/search/?api=1&query=${this.state.dataShop.lat}%2C${this.state.dataShop.lng}`
// https://www.google.com/maps/search/?api=1&query=${this.state.dataShop.lat}%2C-${this.state.dataShop.lng}
        console.log("log :", this._useQueryString().id )
        return (
            <div>
                <Nav />

                <div className='detailshop' >
                    <div>
                        <div className='n-shop' >
                            {this.state.dataShop.nameshop}
                        </div>
                        <div className='address'>
                            <label>ที่อยู่</label> {this.state.dataShop.address}
                            <label>ตำบล</label> {this.state.dataShop.district}
                            <label>อำเภอ</label> {this.state.dataShop.amper}
                            <label>จังหวัด</label> {this.state.dataShop.province}
                        </div>
                        <div>
                            <label>โทร</label> {this.state.dataShop.tel}
                        </div>
                    </div>
                    <a href={url}>คลิกเพื่อไปที่ร้าน</a>
                </div>

            </div>
        );
    }
}
