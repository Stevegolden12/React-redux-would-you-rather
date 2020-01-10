import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
//import { addQuestion } from '../actions/questions'

class HomePage extends Component{

  render(){
    return (
      <h1>Home Page</h1>
      )
  }
}

export default connect()(HomePage)