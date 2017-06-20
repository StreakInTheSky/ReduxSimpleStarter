import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export class CurateDetails extends React.Component {
  constructor(props){
    super(props)

    this.galleyTitle = null;
    this.galleryDescription = null;
    this.galleryTags = [];
  }

  render() {
    return(
      <div className="curate-contents curate-details">
        <section className="curate-form-group">
          <div className="page-description">
            <p>Add a title and description to your gallery. Add tags so people can easily find your gallery.</p>
          </div>
          <form id="galleryDetails" className="curate-forms">
            <label>Title*</label>
            <input type="text" ref={(input) => { this.galleryTitle = input; }} required/>
            <label>Description*</label>
            <input type="text" ref={(input) => { this.galleryDescription = input; }} required/>
            <label>Tags</label>
            <input type="text" ref={(input) => { this.galleryTags = input; }} />
          </form>
        </section>
        <nav className="curate-page-nav">
          <Link className="mock-button next-page" to={'/curate/fetch'} >&#60; Back</Link>
          <button type="submit" disabled={this.props.addedImagesLength === 0}>Post Gallery</button>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  addedImagesLength: state.curate.addedImages.length
});

export default connect(mapStateToProps)(CurateDetails);
