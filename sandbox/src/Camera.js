import React from "react";
import Webcam from "react-webcam";
import './Camera.css';
import 'tachyons';

class WebcamCapture extends React.Component {
    setRef = webcam => {
      this.webcam = webcam;
    };
  
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc);
      
      this.props.onScreenshotClick(imageSrc);

      setTimeout = () => {

      };
    };
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
  
      return (
        <div>
          <Webcam
            className='webCam'
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <br/>
          <button className='f6 link dim br3 ph3 pv2 mb2 dib white bg-black button' onClick={this.capture}>Capture photo</button>
        </div>
      );
    }
  }

export default WebcamCapture;

