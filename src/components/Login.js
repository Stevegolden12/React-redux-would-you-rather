import React, { Component } from 'react'
import usericon from '../image/usericon.svg'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared.js'

export class Login extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    console.log(this.props)
    return (
        <main className='login-mainwrapper'>
          <div>
            <h1 className='center'>Would you rather App!</h1>
            <h2 className='center'>Please sign in to continue</h2>
            <img className='login-imagelayout' src={usericon} alt='user icon'></img>
            <h3 className='center'>Sign In</h3>
            <div className='center'>
              <select>
                <option>Placeholder</option>
              </select>
            </div>
          </div>
          </main>
      )
  }
}

function mapStateToProps(state) {
  return {
    state   
  }
}

export default connect(mapStateToProps)(Login)