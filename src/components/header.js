import React from 'react'

export default class Header extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <header className="page-topper">
        <h1>Curator-Rater</h1>
        {/* <MainNav /> */}
        {/* <ProfileMenu /> */}
      </header>
    )
  }
}
