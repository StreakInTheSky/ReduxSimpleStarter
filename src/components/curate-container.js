import React from 'react'

import ImageGallery from './curate-image-gallery'
import InstagramImages from './curate-view-instagram-images'

export default class CurateContainer extends React.Component {
  constructor(props) {
    super(props)

    this.fetchImageInput = null
    this.fetchInstagramInput = null
    this.state = {
      fetchedImages: [],
      fetchedFromInstagram: [],
      fetchInstagramBy: 'Username'
    }

    this.keyHandler = this.keyHandler.bind(this)
    this.switchFetchInstagramBy = this.switchFetchInstagramBy.bind(this)
    this.fetchImageFromInstagram = this.fetchImageFromInstagram.bind(this)
    this.fetchImageFromFile = this.fetchImageFromFile.bind(this)
    this.fetchImageFromUrl = this.fetchImageFromUrl.bind(this)
  }

  keyHandler(event, callback) {
    if (event.keyCode === 13) {
      callback()
    }
  }

  switchFetchInstagramBy() {
    if (this.state.fetchInstagramBy === 'Username') {
      this.setState({ fetchInstagramBy: 'Hashtag'})
    } else {
      this.setState({ fetchInstagramBy: 'Username'})
    }

    console.log(`set to ${this.state.fetchInstagramBy}`)
  }

  fetchImageFromInstagram() {
    this.setState({ fetchedFromInstagram: [] })

    let url = 'http://localhost:3000/api/fetch/instagram';

    if (this.state.fetchInstagramBy === 'Username') {
      url = url + `?username=${this.fetchInstagramInput.value}`
    } else if (this.state.fetchInstagramBy === 'Hashtag') {
      url = url + `?tag=${this.fetchInstagramInput.value}`
    }

    console.log('...loading images')

    const xhr = new XMLHttpRequest();
    xhr.onloadend = () => {
      console.log('images loaded.')
      this.setState({ fetchedFromInstagram: xhr.response})
    };
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
  }

  fetchImageFromFile(event) {
    const files = event.target.files
    let promises = []
    for (let i = 0; i < files.length; i++) {
      promises.push(new Promise((resolve, reject) => {
        const reader = new FileReader()
        const file = files[i]
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
        reader.readAsDataURL(file)
      }))
    }
    Promise.all(promises).then(images => this.setState({ fetchedImages: [...this.state.fetchedImages, ...images]}))
  }

  fetchImageFromUrl() {
    // regex for valid url here

    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ fetchedImages: [...this.state.fetchedImages, reader.result]})
        this.fetchImageInput.value = ''
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', `http://localhost:3000/api/fetch/image-url?imageUrl=${this.fetchImageInput.value}`);
    xhr.responseType = 'blob';
    xhr.send();
  }

  render() {
    return (
      <div>
        <h2>Curate</h2>
        <p>Search Instagram, upload, or enter the url of the images you want to add to a new gallery.</p>
        <div>
          <label>Enter Instagram <span className="fetch-instagram-by" style={styles.searchBy}onClick={this.switchFetchInstagramBy}>{this.state.fetchInstagramBy}</span>
            <input type="text" onKeyUp={event => this.keyHandler(event, this.fetchImageFromInstagram)} ref={(input) => { this.fetchInstagramInput = input; }} />
          </label>
          <button type="submit" onClick={this.fetchImageFromInstagram}>View Images</button>
          <InstagramImages urls={this.state.fetchedFromInstagram} />
        </div>
        <div>
          <label>Image Url
            <input type="url" onKeyUp={event => this.keyHandler(event, this.fetchImageFromUrl)} ref={(input) => { this.fetchImageInput = input; }}/>
          </label>
          <button type="submit" onClick={this.fetchImageFromUrl}>Fetch Image</button>
        </div>
        <div>
          <label htmlFor="upload">Upload</label>
          <input id="upload" style={styles.upload} type="file" onChange={this.fetchImageFromFile} accept="image/*" multiple />
        </div>
        <ImageGallery images={this.state.fetchedImages} />
      </div>
    )
  }
}

const styles = {
  upload: {
    display: 'none'
  },
  searchBy: {
    backgroundColor: 'black',
    color: 'white',
    textDecoration: 'underline'
  }
}
