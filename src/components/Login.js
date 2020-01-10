import React, { Component, Fragment } from 'react'
import usericon from '../image/usericon.svg'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared.js'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import HomePage from './HomePage'

export class Login extends Component {
  constructor(props) {
    super(props);

  this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  handleDropdownChange(e) {
    e.preventDefault()

     //< Route path = '/Home' exact component={ HomePage } />
  }
  render() {
    const { users, questions } = this.props;
    const usersArray = Object.values(users)
    console.log(usersArray)
    usersArray.map((user) => {
      console.log(user.name)
    })
    return (
      <Fragment>    
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <main className='login-mainwrapper'>
            <div>
              <h1 className='center'>Would you rather App!</h1>
              <h2 className='center'>Please sign in to continue</h2>
              <img className='login-imagelayout' src={usericon} alt='user icon'></img>
              <h3 className='center'>Sign In</h3>
              <div className='center'>
                <select >   
                  {usersArray.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>                  
                  ))}      
                </select>
              </div>
            </div>
          </main>}
        </Fragment>
      )
  }
}

function mapStateToProps({ authedUser, users, questions }) { 

  return {
    loading: authedUser === null, 
    users,
    questions,
  }
}

export default connect(mapStateToProps)(Login)