import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Map from './components/Map.js'
//import { Route, Link } from 'react-router-dom';

// components
import Signup from './components/SignUp';
import LoginForm from './components/login-form';
import Navbar from './components/navbar';
import Home from './components/Home';
import FooterNav from './components/FooterNav';

//stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Events from './components/Events';
import MeetUp from './components/MeetUp';
import Places from './components/Places';

// import EventsModal from './components/EventsModal';
// import FavoriteEvents from './components/FavoriteEvents';
// import FavoriteMeetUp from './components/FavoriteMeetup';
// import FavoritePlaces from './components/FavoritePlaces';
// import LaunchPage from './components/LaunchPage';
// import MeetUpModal from './components/MeetUpModal';

// import PlacesModal from './components/PlacesModal';
// import SignIn from './components/SignIn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ');

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* greet user if logged in: */}
          {this.state.loggedIn && (
            <h1>Welcome to the party, {this.state.username}!</h1>
          )}
          {/* Routes to different components */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/login"
              render={() => <LoginForm updateUser={this.updateUser} />}
            />
            <Route path="/signup" render={() => <Signup />} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/places" component={Places} />
            <Route exact path="/meetup" component={MeetUp} />
          </Switch>
          <FooterNav />
        </div>
      </Router>
    );
  }
}

export default App;
