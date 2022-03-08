import logo from './logo.svg';
import SimpleMap from './component/gmpz/Gmap';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
       <div>
         <SimpleMap />
       </div>
    );
  }
};
export default App;
