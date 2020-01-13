import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
//import { addQuestion } from '../actions/questions'

class HomePage extends Component{

  render(){
    return (
      <h1>This will be the heading for HomePage</h1>
      )
  }
}

export default connect()(HomePage)