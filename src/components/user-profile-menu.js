import React from 'react'
import { Link } from 'react-router'

export default function ProfileMenu(props) {
  return (
    <div className="users-menu" >
      <ul style={styles.ul}>
        <li><Link style={styles.links} className="user-menu-item" to={`/${props.username}/following`}>following {props.following.length}</Link></li>
        <li><Link style={styles.links} className="user-menu-item" to={`/${props.username}/followers`}>followers {props.followers.length}</Link></li>
        <li><span style={styles.links} className="user-menu-item" >favorites</span></li>
      </ul>
    </div>
  )
}

const styles = {
  ul: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: "300px"
  },
  links: {
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer'
  }
}
