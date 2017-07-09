import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import * as actions from '../../actions/user'
import ProfileMenu from './profile-menu'
import Gallery from '../gallery'

export class UserProfile extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount() {
    this.props.actions.fetchUserInfo(this.props.params.username);
 }

  render() {
    const user = this.props.user;
    console.log(user)

    const galleries = user.galleries.map((gallery, index) => {
      return <Gallery key={index} gallery={gallery} />;
    });

    return (
      <main className="content">
        <section className="profile-header">
          <div className="user-info">
            <h2 className="username">{user.username}</h2>
            <span className="mock-button follow-button" >Follow</span>
          </div>
          <ProfileMenu username={user.username} following={user.following} followers={user.followers} />
        </section>
        {galleries}
        {this.props.children}
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
