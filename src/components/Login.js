import React, { Component, Fragment } from 'react'
import usericon from '../image/usericon.svg'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared.js'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom' 
import HomePage from './HomePage'

export class Login extends Component {
  constructor(props) {
    super(props);

  this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  componentDidMount() {
  }

  handleDropdownChange(e) {
    e.preventDefault()
     console.log("handleDropdownChange")
    return (
      <Router>
        <Route to='/home'></Route>
      </Router>
        )

   }
  render() {
    const { users, questions } = this.props;
    const usersArray = Object.values(users)
   // console.log(usersArray)
    usersArray.map((user) => {
      //console.log(user.name)
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
                <select className="login-dropdown"onChange={this.handleDropdownChange} >   
                  {usersArray.map((user) => (                   
                    <option key={user.id} value={user.id}><img src={user.avatarURL} /> {user.name}</option>                  
                  ))}      
                </select>
              </div>
            </div>
          </main>}
        <section> 
          <div className="login-dropdowncontainer">
            <nav className="login-nav">
              <ul>        
                <li>WordPress        
                <ul>
             
                </ul>
               </li>
              </ul>
             </nav>              
           </div>
        </section>
        <div class="container">
          <div class="dropdown">
            <div class="caption">Select</div>
            <div class="list">
              {usersArray.map((user) => (
                <div class="item"> <img src={user.avatarURL} className="login-dropdownimage" /> {user.name}</div>
              ))}      
            </div>
          </div>
        </div>
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