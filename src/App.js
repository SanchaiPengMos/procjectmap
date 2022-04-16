import logo from './logo.svg';
import SimpleMap from './component/gmpz/Gmap';
import ToMap from './component/gmpz/AMap';

import { Component } from 'react';
import Router from './Router/Router';

import './App.css';


class App extends Component {
  render() {
    return (
       <div>
         {/* <ToMap /> */}

          <Router />

       </div>
    );
  }
};
export default App;
