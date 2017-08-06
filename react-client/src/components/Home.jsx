import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap';

const Home = () => (
  <div className="container-fluid">
    <Jumbotron>
      <h1>Welcome to Dispersed!</h1>
      <p>This is a summary of what this website is for. Its a database for some forets and stuff and reviews and stuff and more stuff. I really like cheese burgers and could really use one right now.</p>
      <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
  </div>
)

export default Home
