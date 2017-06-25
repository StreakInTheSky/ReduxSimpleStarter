import React from 'react';
import { connect } from 'react-redux';
// import PageTransition from 'react-router-page-transition';

import ImageGallery from './image-gallery'
import * as actions from '../../actions/curate'

export class CurateContainer extends React.Component {
  constructor(props) {
    super(props)

    this.deleteImage = this.deleteImage.bind(this)
    this.viewImage = this.viewImage.bind(this)
    this.unviewImage = this.unviewImage.bind(this)
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
          {/* <PageTransition> */}
            {this.props.children}
          {/* </PageTransition> */}

          <div className="curate-gallery">
            <ImageGallery
              images={this.props.addedImages}
              deleteImage={this.deleteImage}
              viewImage={this.viewImage}
              unviewImage={this.unviewImage}
              currentImage={this.props.currentImage} />
          </div>
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
