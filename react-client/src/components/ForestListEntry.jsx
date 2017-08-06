import React from 'react';
import { Link } from 'react-router-dom'

class ForestListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let forest = this.props.forest;
    return(
      <div className="section group">
        <Link to={`/forests/${forest._id}`}>{forest.name}</Link>
        <div className="col span_1_of_3">
          <img className="avatar" src={this.props.forest.image}/>
        </div>
        <div className="col span_2_of_3">
          <div>{this.props.forest.description}</div>
          <a href={this.props.forest.usfs}>USFS Official Page</a>
        </div>
      </div>
    );
  }
}

export default ForestListEntry;