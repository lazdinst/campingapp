import React from 'react';
import { Link } from 'react-router-dom'
import ForestReview from './ForestReview.jsx';
import ForestForm from './ForestForm.jsx';
import {Button, ButtonGroup, Glyphicon} from 'react-bootstrap'

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
    console.log(forest);
    if(forest.reviews) {
      var reviews = forest.reviews.map((review, i) => {
        return <ForestReview review={review} key={i} />
      });
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
              <h3>{forest.name}</h3>
              <img className="avatar" src={forest.image}/>
              <div>{forest.description}</div>
              <Button href={forest.usfs}><Glyphicon glyph="info-sign" /></Button>
              <hr />
              <div>
                <ForestForm forestid={this.props.match.params.number} getAllForests={this.props.getAllForests} addNewForestReview={this.props.addNewForestReview}/>
              </div>
              <hr />
              <div id='review'>
                {reviews}
              </div>
            <Link to='/forests'>Back</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Forest;