import React from 'react';
import { Link } from 'react-router-dom'

class Forest extends React.Component {
  constructor(props) {
    super(props);
  }

  getForestInfo() {
    //Matches Number to Object _id
    return this.props.forests.filter((forest) => {
      return forest._id === this.props.match.params.number;
    });
  }

  render() {
    let forest = this.getForestInfo()[0];
    return(
      <div>
        <div className="section group">
          <h3>{forest.name}</h3>
          <div className="col span_1_of_3">
            <img className="avatar" src={forest.image}/>
          </div>
          <div className="col span_2_of_3">
            <div>{forest.description}</div>
            <a href={forest.usfs}>USFS Official Page</a>
          </div>
        </div>
        <Link to='/forests'>Back</Link>
      </div>
    );
  }
}

export default Forest;