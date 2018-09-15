import React from "react";
import Webcam from "react-webcam";
import './Camera.css';
// import Output from "./Output";

class WebcamCapture extends React.Component {
    setRef = webcam => {
      this.webcam = webcam;
    };
  
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc);
      this.props.onScreenshotClick(imageSrc);
    };
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
  
      return (
        <div className='Camera'>
          <Webcam
            audio={false}
            // height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            // width={350}
            videoConstraints={videoConstraints}
          />
          <br/>
          <button className='button' onClick={this.capture}>Capture photo</button>
        </div>
      );
    }
  }

export default WebcamCapture;

