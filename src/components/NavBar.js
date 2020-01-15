import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class NavBar extends Component {
  render() {
    console.log(this.props.users)
    return (
      <Fragment>
        <ul className="navbar-wrapper">
          <li className="navbar-list-item"><span>Home</span></li>
          <li className="navbar-list-item"><span>New Question</span></li>
          <li className="navbar-list-item"><span>Leader Board</span></li>
          <li className="navbar-list-item"><span>User Info</span></li>
          <li className="navbar-list-item"><span>Logout</span></li>
        </ul>
        <hr className="navbar-hr" />
      </Fragment>
      )
  }
}

function mapStateToProps({ users}) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(NavBar)