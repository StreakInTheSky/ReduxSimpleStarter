import React from 'react'

import ImageGallery from './image-gallery'
import CurateInstagram from './instagram'
import CurateUrl from './url'
import CurateUpload from './upload'

export default class CurateContainer extends React.Component {
  constructor(props) {
    super(props)

    this.fetchImageInput = null
    this.fetchInstagramInput = null
    this.state = {
      addedImages: [],
    }

    this.keyHandler = this.keyHandler.bind(this)
    this.addFetchedImages = this.addFetchedImages.bind(this)
  }

  keyHandler(event, callback) {
    if (event.keyCode === 13) {
      callback()
    }
  }

  addFetchedImages(file) {
    console.log('adding fetched image')
    console.log(file)
    const reader = new FileReader()
    reader.onloadend = () => this.setState({ addedImages: [...this.state.addedImages, reader.result]})
    reader.onerror = (error) => console.error(error)
    reader.readAsDataURL(file)
  }

  render() {
    return (
      <main>
        <header>
          <h2>Curate</h2>
          <p>Search Instagram, upload, or enter the url of the images you want to add to a new gallery.</p>
        </header>
        <section>          
          <CurateInstagram keyHandler={this.keyHandler} addImages={this.addFetchedImages} />
          <CurateUrl keyHandler={this.keyHandler} addImages={this.addFetchedImages} />
          <CurateUpload addImages={this.addFetchedImages} />
          <ImageGallery images={this.state.addedImages} />
        </section>
      </main>
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
