import React from 'react';
import { Route, Redirect } from 'react-router'
import Header from './Header.jsx';
import Main from './Main.jsx';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      forests: [],
    }
  }

  componentDidMount() {
    this.getAllForests();
  }

  sortForests(forests) {
    forests.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  getAllForests() {
    console.log('(Client) Pending: Getting All Forests')
    axios.get('/forests')
      .then((response) => {
        console.log('(Client) Success: Retrieved Forests!')
        console.log(response.data);
        //TODO: Sort response.data by name
        let forests = this.sortForests(response.data);
        console.log(forests)
        this.setState({
          forests: response.data

        })
        console.log('Forest State');
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
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Main 
          addNewForest={this.addNewForest.bind(this)} 
          forests={this.state.forests}
          getAllForests={this.getAllForests.bind(this)}
        />
      </div>
    )
  }
}

export default App;
