import React from 'react'
import { Link } from 'react-router'

export default function UserListing(props) {
  const followUser = () => {
    props.followUser(props.username)
  }

  return (
      <li>
        <Link to={`/${props.username}`} >{props.username}</Link>
        <button className="follow-button" style={styles.button} onClick={followUser}>follow</button>
      </li>
  )
}

const styles = {
  button: {
    float: 'right'
  }
}
