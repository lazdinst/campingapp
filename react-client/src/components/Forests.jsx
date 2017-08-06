import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Forest from './Forest.jsx';
import ForestList from './ForestList.jsx';

class Forests extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Switch>
        <Route 
          exact path='/forests' 
          render={(props) => <ForestList {...props} forests={this.props.forests}/>}
        />
        <Route path='/forests/:number' render={(props) => <Forest {...props} forests={this.props.forests}/>}/>
      </Switch>
    );
  }
}

export default Forests;
