import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Segment,
  Container,
  Header,
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Segment
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
      >
        <Container text>
          <Gravatar email="sergigram@gmail.com" size={100} rating="pg" default="monsterid" className="CustomAvatar-image" />
          <Header as='h3' style={{ fontSize: '2em' }}>Sergi Gracia</Header>
          <p style={{ fontSize: '1.33em' }}>
            We can give your company superpowers to do things that they never thought possible. Let us delight
              </p>
          <p style={{ fontSize: '1.33em' }}>
            I'm Sergi Gracia a Catalan developer currently living in Barcelona.
              </p>
          <p style={{ fontSize: '1.33em' }}>
            Former iOS Developer at BlooSee, Redbooth, Wallapop and other companies I'm not allowed to <strike>name</strike>.
              </p>
          <p style={{ fontSize: '1.33em' }}>
            Currently building Mobile, TV and Watch experiences at <a class="color3" href="http://caramba.io">caramba.io</a>
          </p>
          <p style={{ fontSize: '1.33em' }}>
            Contact me at <a class="color4" href="mailto:sergi@caramba.io">sergi@caramba.io</a>
          </p>
        </Container>
      </Segment>
    );
  }
}

export default App;
