import React from 'react'
import axios from 'axios'

export default class CurateContainer extends React.Component {
  constructor(props){
    super(props)

    this.fetchImageInput = null

    this.uploadImage = this.uploadImage.bind(this)
    this.fetchImageFromUrl = this.fetchImageFromUrl.bind(this)
  }

  uploadImage() {

  }

  fetchImageFromUrl(event) {
    console.log(this.fetchImageInput.value)
    axios.get(this.fetchImageInput.value)
      .then(res => {
        console.log(res)
      })
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        <h2>Curate</h2>
        <p>Search Instagram, upload, or enter the url of the images you want to add to a new gallery.</p>
        <div><label>Search<input type="text" /></label></div>
        <div><label>Image Url<input type="text" ref={(input) => { this.fetchImageInput = input; }} /></label><button onClick={this.fetchImageFromUrl}>Fetch Image</button></div>
        <div><button>Upload</button></div>
        {this.fetchImageFromUrl}
      </div>

    )
  }
}
