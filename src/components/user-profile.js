import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions'

export class UserProfile extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount() {
    this.props.actions.fetchUserInfo(this.props.params.username);
 }

  render() {
    const user = this.props.user
    return (
      <main className="content">
        <section className="user-info">
          <h2 className="username">{user.username}</h2>
          <div className="users-menu">
            <ul>
              <li>Following</li>
              <li>Followers</li>
              <li>Favorites</li>
            </ul>
          </div>
        </section>
        {/* <Gallery gallery="user.galleries" /> */}
      </main>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

function mapStateToProps(state, props) {
  return { user: state.user }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
