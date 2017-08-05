import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Forest from './Forest.jsx';
import ForestList from './ForestList.jsx';

class Forests extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //:TODO - Do the mapping here then render as {forests}
    // let forests = this.props.forests.map((forest, i) => { 
    //   return <ForestListEntry forest={forest} key={i} />
    // });
    // console.log(forests);
    // this.setState({
    //   myforests: forests
    // })

    return(
      <Switch>
        <Route 
          path='/forests' 
          render={(props) => <ForestList {...props} forests={this.props.forests}/>}
        />
        <Route path='/forests/:number' component={Forest}/>
      </Switch>
    );
  }
}

export default Forests;
