import logo from './logo.svg';
import SimpleMap from './component/gmpz/Gmap';
import ToMap from './component/gmpz/AMap';

import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
       <div>
         <ToMap />
       </div>
    );
  }
};
export default App;
