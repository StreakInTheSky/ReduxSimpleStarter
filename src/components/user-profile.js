import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions'
import Gallery from './gallery'
import UserList from './userlist'

export class UserProfile extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount() {
    this.props.actions.fetchUserInfo(this.props.params.username);
 }

  render() {
    const user = this.props.user;

    const galleries = user.galleries.map((gallery, index) => {
      return <Gallery key={index} gallery={gallery} />;
    });

    return (
      <main className="content">
        <section className="user-info">
          <h2 className="username">{user.username}</h2>
          <div className="users-menu">
            <ul>
              <li className="user-menu-item">Following: {user.following.length} <UserList userlist={user.following} /></li>
              <li className="user-menu-item">Followers: {user.followers.length} <UserList userlist={user.followers} /></li>
              <li className="user-menu-item">Favorites</li>
            </ul>
          </div>
        </section>
        {galleries}
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
