import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'


// import MapShop from '../component/gmpz/AMap'
import MaPShop from "../component/gmpz/AMap"
import DetailShop from "../component/Toshop/DetailShop";


export default class Index extends Component {
    state = {  } 
    render() { 
        return (
            <Router>
            <div> 
                <Switch>
                    <Route exact path='/' component={MaPShop} />
                    <Route exact path='/detail' component={DetailShop} />
                </Switch>
            </div>
          </Router>
        );
    }
}
 
// export default Router;