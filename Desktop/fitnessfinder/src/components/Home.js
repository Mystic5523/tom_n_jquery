import React, { Component } from 'react';
import { Container, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FavoriteEvents from './FavoriteEvents';
import FavoriteMeetUp from './FavoriteMeetup';
import FavoritePlaces from './FavoritePlaces';

//import FooterNav from './FooterNav';
import girlrunning from '../girlrunning.png';
import '../App.css';
class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <Container>
          <img src={girlrunning} id="girlrunning" width="100%" />

          <Col>
            <Link to="/places/saved">
              <Button className="mt-2 btn-sm btn-block">
                <i class="fas fa-heart" />
                See Saved Places
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/meetup/saved">
              <Button className="mt-2 btn-sm btn-block">
                <i class="fas fa-heart" />
                See Saved Groups
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/events/saved">
              <Button className="mt-2 btn-sm btn-block">
                <i class="fas fa-heart" />
                See Saved Events
              </Button>
            </Link>
          </Col>
          <Route exact path="/events/saved" component={FavoriteEvents} />
          <Route exact path="/places/saved" component={FavoritePlaces} />
          <Route exact path="/meetup/saved" component={FavoriteMeetUp} />
        </Container>
      </Router>
    );
  }
}

export default Home;
