import React from 'react'
import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap';

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><Glyphicon glyph="tree-deciduous" /> Dispersed</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to='/forests'>
              <NavItem>Forests</NavItem>
            </LinkContainer>
            <LinkContainer to='/forests/new'>
              <NavItem>Add New Forest</NavItem>
            </LinkContainer> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      ///
    ) 
  }
}

export default Header;