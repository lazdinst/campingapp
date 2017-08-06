import React from 'react';
import { Route, Redirect } from 'react-router'

class NewForest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newForest: {
        name: '',
        image: '',
        usfs: '',
        description: ''
      },
      redirect: false
    }
  }

  handleChange(e) {
    this.setState({
      newForest: Object.assign(this.state.newForest, {[e.target.name]: e.target.value})
    });
  }

  submitForest () {
    //TODO: Validate the URL before creating it in the Database
    this.setState({
      redirect:true
    })
    this.props.addNewForest(this.state.newForest)
  }

  validateUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to='/'/>
    }
    return(
      <div>
        National Forest Name: 
        <input name="name" placeholder="e.g Lassen National Forest" onChange={this.handleChange.bind(this)}/>
        Image:
        <input name="image" type="url" placeholder="e.g https://google.com/awesome.png" onChange={this.handleChange.bind(this)}/>
        USFS URL:
        <input name="usfs" placeholder="e.g http://www.fs.usda.gov/lassen" onChange={this.handleChange.bind(this)}/>
        Description:
        <input name="description" placeholder="e.g This is an Awesome Place" onChange={this.handleChange.bind(this)}/>

        <button onClick={this.submitForest.bind(this)}>Add Forest</button>
      </div>
    );
  }
}

export default NewForest;

