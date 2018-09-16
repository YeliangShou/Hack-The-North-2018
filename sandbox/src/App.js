import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebcamCapture from './Camera';
import 'tachyons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webCam: false,
      picture: null,
      output: "asjdhfj",
    }
  }

  handleVideoButtonClick = () => {
    this.setState({webCam: !this.state.webCam});
  };

  handleScreenshotCapture = (pic) => {
    this.setState({picture: pic})
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sign Language To Text</h1>
          {this.state.output ? <h3>The symbol is: {this.state.output}</h3> : null}
        </header>
        <button className='f6 link dim br3 ph3 pv2 mb2 dib white bg-black button' onClick={this.handleVideoButtonClick}>{this.state.webCam ? "Turn camera off" : "Turn camera on"}</button>

        {this.state.webCam ? <WebcamCapture onScreenshotClick={this.handleScreenshotCapture}/> : null}
      </div>
    );
  }
}

export default App;
