import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Forests from './Forests.jsx'

class Main extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {

    return (
      <div className='wrapper'>
      <main>
        <Switch>
          <Route 
            exact path='/' 
            component={Home} 
          />
          <Route 
            path='/forests' 
            render={(props) => <Forests {...props} forests={this.props.forests}  addNewForest={this.props.addNewForest} getAllForests={this.props.getAllForests} addNewForestReview={this.props.addNewForestReview}/>}
          />
          <Route
            path='/login'
            render={(props) => <Login {...props} registerNewUser={this.props.registerNewUser}/>}
          />
        </Switch>
      </main>
      </div>
    )
  }
}

export default Main