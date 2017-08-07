import React from 'react'
import { Button, Fade, Glyphicon, FieldGroup, FormGroup, ControlLabel } from 'react-bootstrap';
import FormControl from 'react-bootstrap/lib/FormControl';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:{
        username: '',
        password: '',        
      },

      isLoggedIn: false
    }
  }

  onChange(e) {
    this.setState({
      user: Object.assign(this.state.user, {[e.target.id]: e.target.value})
    })
  }

  submitLogin () {
    this.props.registerNewUser(this.state.user);
  }

  render () {

    return (
      <FormGroup>
        <ControlLabel>Login</ControlLabel>
          <FormControl id='username' type='text' onChange={this.onChange.bind(this)} placeholder='Username' />
          <FormControl id='password' type='password' onChange={this.onChange.bind(this)} placeholder='Password' />
        <Button onClick={this.submitLogin.bind(this)} type='submit'>Submit</Button>
      </FormGroup>
    )
  }
}
export default Login;