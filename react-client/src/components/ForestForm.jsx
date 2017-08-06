import React from 'react';
import {FieldGroup, ControlLabel, Form, FormControl, Button, FormGroup, Col} from 'react-bootstrap';

class ForestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newForest: {
        name: '',
        image: '',
        usfs: '',
        description: ''
      }
    }
  }

  handleChange(e) {
    // this.setState({
    //   newForest: Object.assign(this.state.newForest, {[e.target.name]: e.target.value})
    // });
  }

  submitReview (e) {
    //TODO: Validate the URL before creating it in the Database
    console.log(e, 'clicked')
    // this.props.addNewForest(this.state.newForest)
  }

  render() {
    return(
      <div>
        <div class="form-group">
          <label for="reviewer">Reviewer:</label>
          <input name="reviewer" type="text" class="form-control" id="reviewer" placeholder="e.g Ben Frankling" onChange={this.handleChange.bind(this)}/>
        </div>
        <div class="form-group">
          <label for="title">Review Title:</label>
          <input name="title" type="text" class="form-control" id="title" placeholder="e.g Great Place for Hiking" onChange={this.handleChange.bind(this)}/>
        </div>
        <div class="form-group">
          <label for="review">Review:</label>
          <textarea name="review" class="form-control" rows="5" id="review" onChange={this.handleChange.bind(this)}/>
        </div>
        <button onClick={this.submitReview.bind(this)}>Add Forest</button>
      </div>
    );
  }
}

export default ForestForm;