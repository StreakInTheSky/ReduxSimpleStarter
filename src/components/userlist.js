import React from 'react'
import { connect } from 'react-redux'

import UserListing from './user-listing'

export class UserList extends React.Component {
  constructor(props) {
    super(props)

    this.renderUsers = this.renderUsers.bind(this)
    this.followUser = this.followUser.bind(this)
    this.back = this.back.bind(this)
  }

  followUser(user){
    console.log(`followed ${user}`)
  }

  back(){
    this.props.history.goBack();
  }

  goToLink(path){
    this.props.history.push(path)
  }

  renderUsers = () => {
    return this.props[this.props.params.userlist].map(user => {
      return <UserListing username={user.username} key={user._id} followUser={this.followUser} goToLink={this.goToLink}/>
    })
  }

  render() {

    return (
      <div className="user-list-overlay" style={styles.overlay} >
        <div className="overlay-box" style={styles.box} >
          <div style={styles.header}>
            <h4>{this.props.params.userlist}</h4>
          </div>
          <div style={styles.content}>
            <ul style={styles.ul}>{this.renderUsers()}</ul>
          </div>
          <div style={styles.closeButton} className="close-button" onClick={this.back} >close</div>
        </div>
      </div>
    )
  }
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    position: 'relative',
    width: '500px',
    height: '500px',
    backgroundColor: 'white'
  },
  closeButton: {
    position: 'absolute',
    top: '-2em',
    right: 0,
    padding: '3px',
    backgroundColor: "white",
    cursor: 'pointer'
  },
  header: {
    padding: '10px'
  },
  content: {
    padding: '10px'
  },
  ul: {
    listStyle: 'none',
    padding: 0
  }
}

const mapStateToProps = (state, props) => {
  return {
    followers: state.user.followers,
    following: state.user.following
  }
}


export default connect(mapStateToProps)(UserList)
