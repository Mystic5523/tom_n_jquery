import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterNav extends Component {
  render() {
    return (
      <footer className="fixed-bottom footer">
        <div className="row">
          <Link to="/" className="col-3 btn-primary btn-lg text-white">
            <i class="fas fa-home" />
          </Link>
          <Link to="/places" className="col-3 btn-success btn-lg text-white">
            <i class="fas fa-map-marker-alt" />
          </Link>
          <Link to="Meetup" className="col-3 btn-info btn-lg text-white">
            <i class="fas fa-laugh" />
            <i class="fas fa-laugh" />
          </Link>
          <Link to="events" className="col-3 btn-dark btn-lg text-white">
            <i class="fas fa-trophy" />
          </Link>
        </div>
      </footer>
    );
  }
}
export default FooterNav;
