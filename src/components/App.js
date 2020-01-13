import React, { Component, Fragment } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { connect } from 'react-redux'
//import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared.js'
import Login from './Login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Fragment>
        <h1>Nav</h1>
      <div>   
          <Login />
        </div>
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