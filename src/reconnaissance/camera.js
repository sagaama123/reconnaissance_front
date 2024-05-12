  import React, { useState, useRef } from 'react';
  import Webcam from 'react-webcam';
  import './camera.css'; // Importation du fichier CSS externe
  import { Navbar } from '../pages/Navbar';
  import axios from 'axios';
  import { Navigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

  const videoConstraints = {
    width: 540,
    facingMode: 'environment'
  };

  const Camera = () => {
    const webcamRef = useRef(null);
    const [url, setUrl] = useState('');
    const { id } = useParams();
    console.log(id)
    const [imageObject, setImageObject] = useState({
      name: '',
      url: '', // Generate URL for displaying the image
      type: '',
      file: null // Include the File object if needed for further processing or uploading
    });

    const capturePhoto = () => {
      const screenshot = webcamRef.current.getScreenshot();
      

      // Convert base64 data URL to Blob object
      fetch(screenshot)
        .then(res => res.blob())
        .then(blob => {
          // Create a new File object with the Blob and additional metadata
          const imageFile = new File([blob], 'screenshot.png', { type: 'image/png' });

          // Use the image object as needed
          console.log('Captured image object:', imageFile);

          // Now you can set the URL state to display the captured image
          setImageObject(imageFile);
          setUrl(imageFile.url);
        })
        .catch(error => {
          console.error('Error capturing photo:', error);
        });
    };
  
    const handleSend = async (event) => {
      event.preventDefault();
  
      await capturePhoto();
      const formData = new FormData();
      formData.append('image', imageObject);
      formData.append('id', id);
  
      try {
          const response = await axios.post('http://localhost:5000/check-face', formData);
          // Log the response data
          console.log('Response data:', response.data);
  
          // Handle response from the server
          if (response.data.match) {
              // If match is true, navigate to /Success
              window.location.href = '/Succes'; // Redirect to /Success
          } else if (response.data.max_failure_reached) {
              // If max failure count reached, navigate to /
              console.log('Max failure count reached. Redirecting to /');
              window.location.href = '/';
          } else {
              // Do something if match is false
              console.log('No match found');
              Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
              });
          }
      } catch (error) {
          // Handle error
          console.error('Error:', error);
          // You can add specific error handling here if needed
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
          });
      }
  };
  
  
    

    return (
      <>
        <Navbar />
        <div className='cmaS'>
          <div className="camera-container"> {/* Encapsuler le contenu dans une div avec une classe pour appliquer des styles */}
            <Webcam
              ref={webcamRef}
              audio={true}
              screenshotFormat="image/png"
              videoConstraints={videoConstraints}
              mirrored={false}
              screenshotQuality={1}
            />
            <div className="button-containerS"> {/* Encapsuler les boutons dans une div pour appliquer des styles */}
              <button onClick={capturePhoto}>Capture</button>
              <button onClick={() => setUrl('')}>Refresh</button>
              <button onClick={handleSend}>Check</button>
            </div>
            {url && (
              <div>
                <img src={url} alt="Screenshot" />
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  export default Camera;
