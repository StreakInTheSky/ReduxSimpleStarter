import React from 'react'

import InstagramImages from './view-instagram-images'
import * as actions from '../../actions/curate'

export default class CurateInstagram extends React.Component {
  constructor(props) {
    super(props)

    this.fetchInstagramInput = null
    this.fetchingMessage = null
    this.state = {
      fetchedFromInstagram: [],
      fetchInstagramBy: 'Username',
      isFetchingImages: false,
      imagesLoaded: false,
      imagesToAdd: []
    }

    this.defaultState = this.state

    this.changeFetchingMessage = this.changeFetchingMessage.bind(this)
    this.switchFetchInstagramBy = this.switchFetchInstagramBy.bind(this)
    this.fetchImagesFromInstagram = this.fetchImagesFromInstagram.bind(this)
    this.chooseFetchedImages = this.chooseFetchedImages.bind(this)
    this.addFetchedImages = this.addFetchedImages.bind(this)
    this.renderMessages = this.renderMessages.bind(this)
    this.renderGallery = this.renderGallery.bind(this)
    this.closeGallery = this.closeGallery.bind(this)
  }

  switchFetchInstagramBy() {
    if (this.state.fetchInstagramBy === 'Username') {
      this.setState({ fetchInstagramBy: 'Hashtag '})
    } else {
      this.setState({ fetchInstagramBy: 'Username'})
    }
  }

  changeFetchingMessage() {
    if (this.state.isFetchingImages) {
      this.fetchingMessage = "...loading images"
    } else {
      this.fetchingMessage = null
    }
  }

  fetchImagesFromInstagram(event) {
    event.preventDefault()

    this.setState({ fetchedFromInstagram: [], isFetchingImages: true })

    let url = 'http://localhost:3000/api/fetch/instagram';

    if (this.state.fetchInstagramBy === 'Username') {
      url = url + `?username=${this.fetchInstagramInput.value}`
    } else if (this.state.fetchInstagramBy === 'Hashtag') {
      url = url + `?tag=${this.fetchInstagramInput.value}`
    }

    const xhr = new XMLHttpRequest();
    xhr.onloadend = () => {
      this.setState({
        fetchedFromInstagram: xhr.response,
        isFetchingImages: false,
        imagesLoaded: true,
      })
    };
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
  }

  chooseFetchedImages(event) {
    const imageSrc = event.target.getAttribute('src')
    this.setState({ imagesToAdd: [...this.state.imagesToAdd, imageSrc]})
  }

  addFetchedImages() {
    this.state.imagesToAdd.forEach(imageUrl => this.props.fetchImages(imageUrl))
  }

  renderMessages() {
    this.changeFetchingMessage()

    if (this.state.isFetchingImages) {
      return (
        <p style={styles.fetchingMessage}>{this.fetchingMessage}</p>
    )} else {
      return null
    }
  }

  renderGallery() {
    if (this.state.imagesLoaded) {
      return <InstagramImages urls={this.state.fetchedFromInstagram} chooseImages={this.chooseFetchedImages} addImages={this.addFetchedImages} close={this.closeGallery} />
    }
    else {
      return null
    }
  }

  closeGallery() {
    this.setState({ imagesLoaded: false })
  }

  render() {
    const loadingMessage = this.renderMessages()
    const instagramGallery = this.renderGallery()

    return (
      <form id="fetchImageFromInstagram" className="curate-forms" onSubmit={this.fetchImagesFromInstagram}>
        <label>Enter Instagram <span className="fetch-instagram-by" style={styles.searchBy} onClick={this.switchFetchInstagramBy} >{this.state.fetchInstagramBy}</span></label>
        <div className="input-group" style={styles.inputGroup}>
          <input type="text" ref={(input) => { this.fetchInstagramInput = input; }} required/>
          {loadingMessage}
        </div>
        <button type="submit">View Images</button>
        {instagramGallery}
      </form>
    )
  }
}

const styles = {
  searchBy: {
    backgroundColor: 'black',
    color: 'white',
    textDecoration: 'underline'
  },
  inputGroup: {
    display: 'inline-block',
    position: 'relative'
  },
  fetchingMessage: {
    position: 'absolute',
    textAlign: 'right',
    top: '-0.75em',
    right: 7,
    color: 'gray'
  }
}
