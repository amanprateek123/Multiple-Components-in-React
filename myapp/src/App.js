import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <Content/>
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <div>
      <h1>Welcome to React</h1>
      <img src={logo} className="App-logo"></img>
      </div>
    );
  }
}
class Content extends Component {
  render() {
    return (
      <div>
       <h2>Hello World!</h2>
       <p>I am Aman Prateek</p>
      </div>
    );
  }
}
export default App;
