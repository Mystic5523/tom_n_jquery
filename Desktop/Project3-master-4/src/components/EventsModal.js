import React, { Component } from 'react';
import { Card, Container, Button } from 'reactstrap';

class EventsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch('https://api.myjson.com/bins/i5gn0')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container>
          <div>
            {items.results.map(item => (
              <Card className="my-3 p-3" key={item.childIndex}>
                <h3>
                  <a href={item.registrationUrlAdr}>{item.assetName}</a>
                </h3>
                {item.market.marketName} | {item.place.cityName} |{' '}
                {item.place.stateProvinceCode}
                <Button className="btn-sm mt-2">Save Event</Button>
              </Card>
            ))}
          </div>
        </Container>
      );
    }
  }
}
export default EventsModal;
