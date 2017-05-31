import React from 'react'

import UserListing from './user-listing'

export default function UserList(props) {
  const users = props.userlist.map((user, index) => {
    console.log(user);
    return <UserListing username={user.username} key={index} />
  })
  return (
    <ul>
      {users}
    </ul>
  )
}
