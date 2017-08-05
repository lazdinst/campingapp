import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
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
    console.log('(Client) Pending: Getting All Forests')
    axios.get('/forests')
      .then((response) => {
        console.log('(Client) Success: Retrieved Forests!')
        console.log(response.data);
        //TODO: Sort response.data by name

        this.setState({
          forests: response.data
        })
        console.log('Forest State Updated!')
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

  render() {
    return (
      <div>
        <Header />
        <Main 
          addNewForest={this.addNewForest.bind(this)} 
          forests={this.state.forests}
        />
      </div>
    )
  }
}

export default App;
