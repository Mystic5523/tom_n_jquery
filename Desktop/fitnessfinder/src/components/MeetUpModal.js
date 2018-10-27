import React, { Component } from 'react';
import { Card, Container, Button } from 'reactstrap';

class MeetUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch('https://api.myjson.com/bins/lepbg')
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
            {items.map(item => (
              <Card className="my-3 p-3" key={item.id}>
                <h3>
                  <a href={item.link}>{item.name}</a>
                </h3>
                {item.members} Members | {item.city} | {item.state}
                <Button className="btn-sm mt-2">Save Group</Button>
              </Card>
            ))}
          </div>
        </Container>
      );
    }
  }
}
export default MeetUpModal;
