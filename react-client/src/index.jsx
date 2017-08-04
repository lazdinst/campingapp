import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ForestList from './components/ForestList.jsx';
import ForestListEntry from './components/ForestListEntry.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      forests: []
    }
  }

  componentDidMount() {
    this.getAllForests();
  }

  getAllForests() {
    console.log('CLIENT: Getting All Forests')
    axios.get('/forests')
      .then((response) => {
        console.log('SUCCESS: Retrieved Forests!')
        console.log(response.data);
        this.setState({
          forests: response.data
        })
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  render () {
    return (
      <div>
        <h1>Item List</h1>

        <ForestList forests={this.state.forests}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));