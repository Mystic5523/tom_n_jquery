import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Container,
  FormGroup,
  Label,
  Col,
  Row,
  Input,
  Button
} from 'reactstrap';

//import Map from './Map.js';

class Places extends Component {
  render() {
    return (
      <Router>
        <Container className="formpadding">
          <h2>Get Outside!</h2>
          <h5>Search for parks in your area</h5>
          <center>
            <iframe
              title="gMap"
              name="gMap"
              width="600"
              height="450"
              src={`https://www.google.com/maps/embed/v1/search?q=parks%20near%20Overland%20Park%2C%20KS%2C%20USA&key=AIzaSyCa7GHUwBpHjfw6vohPbYh_WVr9erCd0YU`}
            />
          </center>
        </Container>
      </Router>
    );
  }
}

export default Places;
