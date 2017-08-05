import React from 'react';
import NavbarLinks from './NavbarLinks.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {  
    return(
      <nav className="navbar">
          <div className="section group">
            <div className="col span_1_of_3">
              INSERT LOGO HERE
            </div>
            <div className="col span_2_of_3">
              <NavbarLinks />
            </div>
          </div>
      </nav>
    );
  }
}

export default Navbar;