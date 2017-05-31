import React from 'react'
import { Link } from 'react-router'

export default function UserListing(props) {
  return (
    <li>
      <Link to={props.username}>{props.username}</Link>
    </li>
  )
}
