import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Output from './Output';
import WebcamCapture from './Camera';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webCam: false,
      picture: null
    }
  }

  handleVideoButtonClick = () => {
    this.setState({webCam: !this.state.webCam});
  };

  handleScreenshotCapture= (pic) => {
    this.setState({picture: pic})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sign Language To Text</h1>
        </header>
        <button className='button' onClick={this.handleVideoButtonClick}>Toggle video on/off</button>

        {this.state.webCam ? <WebcamCapture onScreenshotClick={this.handleScreenshotCapture}/> : null}
        {/* <p className='flexParagraph' width='500px'>{this.state.picture}</p> */}
      </div>
    );
  }
}

export default App;
