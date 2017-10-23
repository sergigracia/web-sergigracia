import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Gravatar from 'react-gravatar';
import {
  Segment,
  Container,
  Header,
  Button,
  Icon
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Segment
        textAlign='center'
        style={{ padding: '10em 0em' }}
        vertical
      >
        <Container text>
          <Gravatar email="sergigram@gmail.com" size={200} rating="pg" default="monsterid" className="gravatar-image" />

          <Header as='h1' style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 40, color: '#DDD'}}>Sergi Gracia</Header>

          <p>I'm Sergi Gracia a software engineer currently living in Barcelona.</p>
          <p>Former iOS Developer at BlooSee, Redbooth, Wallapop and other companies I'm not allowed to <strike>name</strike>.</p>
          <p>Currently helping startups to bring ideas to life at <a href="http://caramba.io">caramba.io</a></p>

          <Button primary size='massive' animated='vertical' style={{marginTop: 20}} href='mailto: sergi@caramba.io'>
            <Button.Content visible>Contact Me</Button.Content>
            <Button.Content hidden>
              <Icon name='mail'/>              
            </Button.Content>
          </Button>

          <Container style={{ marginTop: 80 }}>
            <Button color='grey'>
              <Icon name='github'/>Github
            </Button>        
            <Button color='twitter'>
              <Icon name='twitter'/>Twitter
            </Button>        
            <Button color='linkedin'>
              <Icon name='linkedin'/>LinkedIn
            </Button>
            <Button color='green'>
              <Icon name='medium'/>medium
            </Button>
          </Container>

        </Container>
      </Segment>
    );
  }
}

export default App;
