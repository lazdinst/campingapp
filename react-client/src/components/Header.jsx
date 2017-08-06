import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <header>
        <nav className="navbar">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/forests'>Forests</Link></li>
            <li><Link to='/forests/new'>Add Forest</Link></li>
            <li><Link to='/'></Link></li>
          </ul>
        </nav>
      </header>
    ) 
  }
}

export default Header;