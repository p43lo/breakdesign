import React, { Component } from "react";
import Routes from "./router";

import "./styles.css";

import Header from "./components/Header";
  
import Main from './pages/main';

const App = () => (
  <div className="App">
  <Header />
  <Routes />
  </div>
); 


export default App;







/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>REACTJS</h1>
      </div>
    );
  }
}
*/
