import React from 'react';
import _ from 'underscore';

class ForestSidebar extends React.Component {
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
    this.setState({
      newForest: _.extend(this.state.newForest, {[e.target.name]: e.target.value})
    });
  }

  search () {
    this.props.addNewForest(this.state.newForest)
  }

  render() {
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

        <button onClick={this.search.bind(this)}>Add Forest</button>
      </div>
    );
  }
}

export default ForestSidebar;

