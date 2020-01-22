import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  render() {
    console.log(this.props.users)
    return (
      <Fragment>
        <ul className="navbar-wrapper">
          <li className="navbar-list-item"><span>
            <NavLink to='/homepage' exact activeClassName='active'>
            Home Page
          </NavLink></span></li>
          <li className="navbar-list-item"><span>
            <NavLink to='/newQuestion' exact activeClassName='active'>
            New Question
          </NavLink></span></li>
          <li className="navbar-list-item"><span>
            <NavLink to='/leaderboard' exact activeClassName='active'>
              Leaderboard
          </NavLink></span></li>       
          <li className="navbar-list-item"><span>User Info</span></li>
          <li className="navbar-list-item"><span>
            <NavLink to='/' exact activeClassName='active'>
              Logout
            </NavLink>
          </span></li>
        </ul>
        <hr className="navbar-hr" />
      </Fragment>
      )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(NavBar)