import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ForestList from './components/ForestList.jsx';
import ForestSidebar from './components/ForestSidebar.jsx';
import Navbar from './components/Navbar.jsx';
import ForestListEntry from './components/ForestListEntry.jsx';
import axios from 'axios';
import './style.css';

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
    console.log('(Client) Pending: Getting All Forests')
    axios.get('/forests')
      .then((response) => {
        console.log('(Client) Success: Retrieved Forests!')
        console.log(response.data);
        //TODO: Sort response.data by name

        this.setState({
          forests: response.data
        })
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  addNewForest(forest) {
    console.log('(Client) Pending: Adding New Forest', forest);
    axios.post('/forests', forest)
      .then((data) => {
        console.log('(Client) Success: Added New Forest');
        console.log(data);
        this.getAllForests();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render () {
    return (
      <div>
        <Navbar/>
        <h1>Item List</h1>
        <div className='wrapper'>
          <div className="section group">
            <div className="col span_1_of_3">
              This is where the side bar is
              <ForestSidebar addNewForest={this.addNewForest.bind(this)}/>
            </div>
            <div className="col span_2_of_3">
              <h3>List of National Parks</h3>
              <ForestList forests={this.state.forests}/>
            </div>
          </div>
        </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));