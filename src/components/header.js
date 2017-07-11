import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/user'

class Header extends React.Component {
  constructor(props){
    super(props)

    this.handleAuth = this.handleAuth.bind(this)
  }

  handleAuth() {
    if (this.props.user.user) {
      this.props.actions.signOut()
    } else {
      this.props.actions.authenticate()
    }
  }

  render() {
    return (
      <header className="page-topper">
        <h1>Curator-Rater</h1>
        {/* <MainNav /> */}
        {/* <ProfileMenu /> */}
        <span onClick={() => this.handleAuth()}>{this.props.user.user ? 'logout' : 'login'}</span>
      </header>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

function mapStateToProps(state, props) {
  return { user: state.user }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
