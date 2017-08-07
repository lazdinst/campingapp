import React from 'react';
import {FieldGroup, ControlLabel, Form, FormControl, Button, FormGroup, Col} from 'react-bootstrap';

class ForestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newReview: {
        reviewer: '',
        title: '',
        review: '',
        forestid: ''
      }
    }
  }

  handleChange(e) {
    this.setState({
      newReview: Object.assign(this.state.newReview, {[e.target.name]: e.target.value})
    });
  }

  submitReview (e) {
    //TODO: Validate the URL before creating it in the Database
    console.log(e, 'clicked')
    console.log(this.props.forestid)
    this.setState({
      newReview: Object.assign(this.state.newReview, {forestid: this.props.forestid})
    })

    this.props.addNewForestReview(this.state.newReview);
    // this.props.addNewForest(this.state.newForest)
  }

  render() {
    return(
      <div>
        <div className="form-group">
          <label>Reviewer:</label>
          <input name="reviewer" type="text" className="form-control" id="reviewer" placeholder="e.g Ben Franklin" onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="form-group">
          <label>Review Title:</label>
          <input name="title" type="text" className="form-control" id="title" placeholder="e.g Great Place for a Tea Party" onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="form-group">
          <label>Review:</label>
          <textarea name="review" className="form-control" rows="5" id="review" onChange={this.handleChange.bind(this)}/>
        </div>
        <button onClick={this.submitReview.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default ForestForm;