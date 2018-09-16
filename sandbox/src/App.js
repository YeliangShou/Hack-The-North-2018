import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
// import Output from './Output';
import WebcamCapture from "./Camera";
import "tachyons";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            webCam: false,
            picture: null,
            output: ""
        };
    }

    handleVideoButtonClick = () => {
        this.setState({ webCam: !this.state.webCam });
    };

    handleScreenshotCapture = pic => {
        axios
            .post("http://127.0.0.1:5000/react", { data: pic })
            .then(res => {
                let data = res.data;
                if (data === 0) {
                    this.setState({ output: "Unavailable: Try Again" });
                    return;
                }
                let letter = data.split("/")[0];
                let accuracy = data.split("/")[1];
                this.setState({ picture: pic });
                this.setState({ output: letter });
            })
            .catch(e => {
                console.log(e);
                console.log("error");
            });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Sign Language To Text</h1>
                    {this.state.output ? (
                        <h3>The symbol is: {this.state.output}</h3>
                    ) : (
                        <h3>
                            Turn the camera on and take a picture of your sign!
                        </h3>
                    )}
                </header>
                <button
                    className="f6 link dim br3 ph3 pv2 mb2 dib white bg-black button"
                    onClick={this.handleVideoButtonClick}
                >
                    {this.state.webCam ? "Turn camera off" : "Turn camera on"}
                </button>

                {this.state.webCam ? (
                    <WebcamCapture
                        onScreenshotClick={this.handleScreenshotCapture}
                    />
                ) : null}
                {/* <p className='flexParagraph' width='500px'>{this.state.picture}</p> */}
            </div>
        );
    }
}

export default App;
