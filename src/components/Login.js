import React, { Component, Fragment } from 'react'
import usericon from '../image/usericon.svg'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared.js'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom' 
import HomePage from './HomePage'
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleAuthUser = this.handleAuthUser.bind(this);
  }

  componentDidMount() {
  }

  handleAuthUser(e) {
    e.preventDefault;
    console.log(e.value)
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
          : <main>
            <div>
              <h1 className='center'>Would you rather App!</h1>
              <h2 className='center'>Please sign in to continue</h2>
              <img className='login-imagelayout' src={usericon} alt='user icon'></img>
              <h3 className='center'>Sign In</h3>
              <div className='login-dropdownWrapper'>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown">
                  Users
              </Dropdown.Toggle>     
                  <Dropdown.Menu onSelect={this.handleAuthUser}>
                  {usersArray.map((user) => (
                    <Dropdown.Item key={user.id} value={user.id}><img className="login-dropdown-image" src={user.avatarURL} /> {user.name}</Dropdown.Item>
                  ))}
                  </Dropdown.Menu>            
                </Dropdown>
              </div>
            </div>
          </main>}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        />
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