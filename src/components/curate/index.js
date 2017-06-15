import React from 'react'
import { connect } from 'react-redux';

import ImageGallery from './image-gallery'
import CurateInstagram from './instagram'
import CurateUrl from './url'
import CurateUpload from './upload'
import * as actions from '../../actions/curate'

export class CurateContainer extends React.Component {
  constructor(props) {
    super(props)

    this.keyHandler = this.keyHandler.bind(this)
    this.fetchImages = this.fetchImages.bind(this)
  }


  keyHandler(event, callback) {
    if (event.keyCode === 13) {
      callback()
    }
  }

  fetchImages(imageUrl) {
    this.props.dispatch(actions.fetchImage(imageUrl));
  }

  render() {

    return (
      <main className="curate-main-container">
        <header className="main-header">
          <h2>Curate</h2>
          <p>Search Instagram, upload, or enter the url of the images you want to add to a new gallery.</p>
        </header>
        <section className="main-content">
          <CurateInstagram keyHandler={this.keyHandler} fetchImages={this.fetchImages} dispatch={this.props.dispatch}/>
          <CurateUrl keyHandler={this.keyHandler} fetchImages={this.fetchImages} dispatch={this.props.dispatch} />
          <CurateUpload dispatch={this.props.dispatch} />
          <ImageGallery images={this.props.addedImages} />
          <button className="next-page" type="button" disabled>Gallery Details</button>
        </section>
      </main>
    )
  }
}

const mapStateToProps = (state, props) => ({addedImages: state.curate.addedImages});

export default connect(mapStateToProps)(CurateContainer);
