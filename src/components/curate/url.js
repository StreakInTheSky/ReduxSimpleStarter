import React from 'react'

export default class CurateContainer extends React.Component {
  constructor(props) {
    super(props)

    this.fetchImageInput = null

    this.fetchImageFromUrl = this.fetchImageFromUrl.bind(this)
  }

  fetchImageFromUrl(event) {
    event.preventDefault()
    // regex for valid url here

    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      this.props.addImages(xhr.response)
      this.fetchImageInput.value = ''
    }
    xhr.open('GET', `http://localhost:3000/api/fetch/image-url?imageUrl=${this.fetchImageInput.value}`);
    xhr.responseType = 'blob';
    xhr.send();
  }

  render() {
    return (
      <form id="fetchImageFromUrl" onSubmit={this.fetchImageFromUrl}>
        <label>Image Url</label>
        <input type="url" ref={(input) => { this.fetchImageInput = input; }} required/>
        <button type="submit">Fetch Image</button>
      </form>
    )
  }
}

// onKeyUp={event => this.props.keyHandler(event, this.fetchImageFromUrl)}
