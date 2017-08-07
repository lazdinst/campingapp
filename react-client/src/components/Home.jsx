import React from 'react'
import {Jumbotron, Button, Image} from 'react-bootstrap';

const Home = () => (
  <div className="container">
    <Jumbotron>
      <h2>Welcome to Dispersed!</h2>
      <p>Dispered is a web application allows users to view a database of dispersed camping sites. </p>
      <p><Button bsStyle="primary">Learn more</Button></p>
      <div className='pull-right'>
        <Image width="48" src='http://i.imgur.com/PE27Q6i.png'/>
        <Image width="60" src='http://i.imgur.com/x3r5qYT.png'/>
        <Image width="60" src='https://cdn.auth0.com/blog/react-js/react.png'/>
        <Image width="48" src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'/>
      </div>
      Talis Lazdins - HackReactor MVP
    </Jumbotron>
  </div>
)

export default Home
