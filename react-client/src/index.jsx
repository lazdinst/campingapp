import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
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
        //TODO: Sort response.data by name
        let forests = repsonse.data.sort(function(a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        this.setState({
          forests: forests;
          })
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

      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app');


//OLD Code: Pre-React Dom
        // <Navbar/>
        // <h1>Item List</h1>
        // <div className='wrapper'>
        //   <div className="section group">
        //     <div className="col span_1_of_3">
        //       This is where the side bar is
        //       <ForestSidebar addNewForest={this.addNewForest.bind(this)}/>
        //     </div>
        //     <div className="col span_2_of_3">
        //       <h3>List of National Parks</h3>
        //       <ForestList forests={this.state.forests}/>
        //     </div>
        //   </div>
        // </div>

