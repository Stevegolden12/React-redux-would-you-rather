import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { connect } from 'react-redux'
//import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared.js'
import Login from './Login'
import NavBar from './NavBar'
import HomePage from './HomePage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Router>
        <NavBar />
      <div>   
            {this.props.loading === false && <Route exact path="/"></Route> }     
        </div>
       
          <Route path='/' exact component={Login} />
          <Route path='/homepage' component={HomePage} />
          <Route path='/newquestion' component={NewQuestion} />
          <Route path='/leaderboard' component={LeaderBoard} />
        </Router>
        </Fragment>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  console.log(users)
  return {
    loading: authedUser === null,
    users,
    questions,
  }
}

export default connect(mapStateToProps)(App)