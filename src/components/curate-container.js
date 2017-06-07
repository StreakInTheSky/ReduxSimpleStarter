import React from 'react'

import ImageGallery from './curate-image-gallery'

export default class CurateContainer extends React.Component {
  constructor(props) {
    super(props)

    this.fetchImageInput = null
    this.state = {
      fetchedImages: []
    }

    this.uploadImage = this.uploadImage.bind(this)
    this.fetchImageFromUrl = this.fetchImageFromUrl.bind(this)
  }

  uploadImage() {}

  fetchImageFromUrl() {
    // regex for valid url here

    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedState = this.state;
        updatedState.fetchedImages.push(reader.result)
        this.setState(updatedState)
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', `http://localhost:3000/api/fetch/image-url?imageUrl=${this.fetchImageInput.value}`);
    xhr.responseType = 'blob';
    xhr.send();
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <h2>Curate</h2>
        <p>Search Instagram, upload, or enter the url of the images you want to add to a new gallery.</p>
        <div>
          <label>Search<input type="text"/></label>
        </div>
        <div>
          <label>Image Url<input type="text" ref={(input) => { this.fetchImageInput = input; }}/></label>
          <button onClick={this.fetchImageFromUrl}>Fetch Image</button>
        </div>
        <div>
          <button>Upload</button>
        </div>
        <ImageGallery images={this.state.fetchedImages} />
      </div>
    )
  }
}
