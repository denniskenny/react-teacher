import React, { Component } from 'react';
import axios from 'axios';
import ClassListComponent from './components/classListComponent.jsx';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {classes: [{name:'None'}]};

        let AUTH_TOKEN = 'SIF_HMACSHA256 ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJsa1pXNTBhWFI1TG1Gd2FTNW9iV2hqYnk1amIyMGlMQ0poZFdRaU9pSm9kSFJ3T2k4dmQzZDNMbWh0YUdOdkxtTnZiU0lzSW1saGRDSTZNVFE1T1RrME5EWXlPQ3dpYzNWaUlqb2lZMjVjZFRBd00yUlVaV0ZqYUdWeUlERXdRMnhoYzNObGN5eDFhV1JjZFRBd00yUjBaV0ZqYUdWeVh6RXdZMnhoYzNObGN5eDFibWx4ZFdWSlpHVnVkR2xtYVdWeVhIVXdNRE5rWkdZek9HTTNaRE10WlRjME9TMDBOREptTFRnM05URXROMkZtTWpobU1qSXdNbUl4TEc5Y2RUQXdNMlE1TWpBd01EUTNOU3hrWTF4MU1EQXpaRGt5TURBd05EYzBJaXdpYUhSMGNEb3ZMM2QzZHk1cGJYTm5iRzlpWVd3dWIzSm5MMmx0YzNCMWNtd3ZiR2x6TDNZeEwzWnZZMkZpTDNCbGNuTnZiaUk2V3lKSmJuTjBjblZqZEc5eUlsMHNJbVJwYzNSZmFXUWlPaUkwWkRFd01UQTRNUzB4WlRSaUxUUm1NMkV0WVRCbU55MWhPV0k0T1RoaU1ERmtZamNpTENKelkyaHZiMnhmYVdRaU9pSTRabUZqWVRSbE5DMWlNamMwTFRSbU1EUXRPREl6TXkwNFlUYzRZakJqTjJObFpqY2lMQ0p6WTJodmIyeGZjbVZtYVdRaU9pSTRabUZqWVRSbE5DMWlNamMwTFRSbU1EUXRPREl6TXkwNFlUYzRZakJqTjJObFpqY2lMQ0pRYkdGMFptOXliVWxrSWpvaVNVUlRJaXdpWTI5dWRHVjRkRWxrSWpvaUlpd2laR2x6ZEY5eVpXWnBaQ0k2SWpSa01UQXhNRGd4TFRGbE5HSXROR1l6WVMxaE1HWTNMV0U1WWpnNU9HSXdNV1JpTnlJc0luTmphRzl2YkY5allYUmxaMjl5ZVNJNklpSXNJbXAwYVNJNklqUmtOV1kwWVdFeExUTXpZVFV0TkRKa05pMWlNMlZrTFdZeVpqTmxNR0ZqWlRaaU1DSXNJbU5zYVdWdWRGOXBaQ0k2SWpFMU1tTmxaRFV3TFRFek5qa3ROR0l4T1MwNFlqSTJMVGhtTTJRMVpEbGlabVEyWVM1b2JXaGpieTVqYjIwaUxDSmxlSEFpT2pFMU1EQXdNekV3TWpoOS5ZNmViTTBWdlNmeWFKN25jVG5HWE9pU0poZndFWmEtblNEMi1OVE9PaDNvOjhjU2UwaWFjRTJjNXNsQmJNcXEzME5RM3BudHE5ZnhOQVpGZG83L2tUcjA9Cg==';
        axios.defaults.baseURL = 'http://int.hmhone.app.hmhco.com/api/';
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        this.teacher_id =   'df38c7d3-e749-442f-8751-7af28f2202b1';
    }

    handleSuccess = (response) => {
        this.setState((prevState, props)=> (
        {classes : response.data}))
    }
    handleFailure = (error) =>{
        console.log(error);
    }

    handleClick = (e) =>  {
        e.preventDefault();
        axios.get(`/identity/v4/teachers/${this.teacher_id}/sections`)
            .then(this.handleSuccess)
            .catch(this.handleFailure);
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React-Teacher App</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.handleClick}>Fetch Class list</button>
          <ClassListComponent list={this.state.classes} />
        </p>
      </div>
    );
  }
}

export default App;