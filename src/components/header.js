import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
        <Link to="/login" className="mock-button">login</Link>
      </header>
    )
  }
}
