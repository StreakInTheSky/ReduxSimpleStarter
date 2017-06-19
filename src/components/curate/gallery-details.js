import React from 'react'

export default class GalleryDetails extends React.Component {
  constructor(props){
    super(props)

    this.galleyTitle = null;
    this.galleryDescription = null;
    this.galleryTags = [];
  }

  render() {
    return(
      <div className="curate-contents">
        <section className="curate-form-group">
          <div className="page-description">
            <p>Add a title and description to your gallery. Add tags so people can easily find your gallery</p>
          </div>
          <form id="galleryDetails" className="curate-forms">
            <label>Title*</label>
            <input type="text" ref={(input) => { this.galleryTitle = input; }} required/>
            <label>Description*</label>
            <input type="text" ref={(input) => { this.galleryDescription = input; }} required/>
            <label>Gallery Title</label>
            <input type="text" ref={(input) => { this.galleryTags = input; }} />
          </form>
        </section>
        <nav className="curate-page-nav">
          <button type="button">< Back</button>
          <button type="submit">Post Gallery</button>
        </nav>
      </div>
    )
  }
}
