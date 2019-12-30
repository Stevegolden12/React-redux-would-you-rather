import React, { Component } from 'react'
import usericon from '../image/usericon.svg'

export default class Login extends Component {
  render() {
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