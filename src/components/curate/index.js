import React from 'react'
import { connect } from 'react-redux';

import GalleryDetails from './gallery-details'
import ImageGallery from './image-gallery'
import CurateInstagram from './instagram'
import CurateUrl from './url'
import CurateUpload from './upload'
import * as actions from '../../actions/curate'

export class CurateContainer extends React.Component {
  constructor(props) {
    super(props)

    this.fetchImages = this.fetchImages.bind(this)
    this.deleteImage = this.deleteImage.bind(this)
    this.viewImage = this.viewImage.bind(this)
    this.unviewImage = this.unviewImage.bind(this)
  }

  fetchImages(imageUrl) {
    this.props.dispatch(actions.fetchImage(imageUrl));
  }

  deleteImage(imageIndex) {
    this.props.dispatch(actions.deleteImage(imageIndex));
  }

  viewImage(imageIndex) {
    this.props.dispatch(actions.viewImage(imageIndex));
  }

  unviewImage(imageIndex) {
    this.props.dispatch(actions.unviewImage(imageIndex));
  }
  render() {

    return (
      <main className="curate-main-container">
        <header className="main-header">
          <h2>Curate</h2>
        </header>
        <div className="main-content">
          <div className="curate-contents">
            <section className="curate-form-group">
              <div className="page-description">
                <p>Search Instagram by username/hashtag, upload, or enter the url of the images you want to add to the gallery.</p>
              </div>
              <CurateInstagram keyHandler={this.keyHandler} fetchImages={this.fetchImages} dispatch={this.props.dispatch}/>
              <CurateUrl keyHandler={this.keyHandler} fetchImages={this.fetchImages} dispatch={this.props.dispatch} />
              <CurateUpload dispatch={this.props.dispatch} />
            </section>
            <nav className="curate-page-nav">
              <button className="next-page" type="button" disabled={this.props.addedImages.length === 0}>Gallery Details ></button>
            </nav>
          </div>
          <GalleryDetails />

          <ImageGallery
            images={this.props.addedImages}
            deleteImage={this.deleteImage}
            viewImage={this.viewImage}
            unviewImage={this.unviewImage}
            currentImage={this.props.currentImage} />
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state, props) => ({
  addedImages: state.curate.addedImages,
  currentImage: state.curate.currentImage
});

export default connect(mapStateToProps)(CurateContainer);
