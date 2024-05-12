import React, { Component } from "react";
import "./file.scss";
import axios from "axios";
import { Navbar } from "../pages/Navbar";
import Loader from "../component/Loader";
import { Navigate } from "react-router-dom";




export class File extends Component {
  state = {
    selectedFile: null,
    result: null,
    user_id : null,
    loading: false,
    error: null,
  };
  const 
  

  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  onFileUpload = () => {
    if (this.state.selectedFile) {
      const formData = new FormData();
      formData.append("image", this.state.selectedFile);

      this.setState({ loading: true, error: null });

      axios
        .post("http://127.0.0.1:5000/process-image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Response from server:", response.data);
          const result = response.data.result;
          if (result !== undefined && result !== null) {
            this.setState({ result, loading: false });
            console.log("Result:", result); // Log the result to the console
            if(result === 'match'){
              this.setState({user_id : response.data.user_id})
            }

            
          } else {
            this.setState({ result: null, loading: false, error: "No result found." });
            
          }
        })
        .catch((error) => {
          console.error("Error processing image:", error);
          this.setState({ loading: false, error: "Error processing image." });
          
        });
    } else {
      console.error("No file selected for upload.");
    }
  };



  render() {
    return (
      <>
        <Navbar />
        <div className="containerF">
          <div className="contentF">
            {this.state.loading && <Loader />}
            <h1>{this.state.loading ? "Loading..." : "VALIDCHECKID"}</h1>
            <h3>{this.state.loading ? "Please wait while we verify your identity..." : "VERIFY YOUR IDENTITY"}</h3>
            {this.state.error && <p className="error">{this.state.error}</p>}
            <div className="file-upload">
              <input type="file" onChange={this.onFileChange} />
              <button onClick={this.onFileUpload}>valide!</button>
            </div>
            {this.state.result !== null && (
              <div className="result">
                <h3>Result:</h3>
                <p>{this.state.result}</p>
                
              </div>
            )}
          </div>
          {
            this.state.result === 'match' && <Navigate to={`/camera/${this.state.user_id}`} />  
          }
        </div>
      </>
    );
  }
}