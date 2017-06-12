import React from 'react'

import InstagramImages from './view-instagram-images'

export default class CurateInstagram extends React.Component {
  constructor(props) {
    super(props)

    this.fetchInstagramInput = null
    this.state = {
      fetchedFromInstagram: [],
      fetchInstagramBy: 'Username'
    }

    this.switchFetchInstagramBy = this.switchFetchInstagramBy.bind(this)
    this.fetchImagesFromInstagram = this.fetchImagesFromInstagram.bind(this)
  }

  switchFetchInstagramBy() {
    if (this.state.fetchInstagramBy === 'Username') {
      this.setState({ fetchInstagramBy: 'Hashtag'})
    } else {
      this.setState({ fetchInstagramBy: 'Username'})
    }
  }

  fetchImagesFromInstagram(event) {
    event.preventDefault()

    this.setState({ fetchedFromInstagram: [] })

    let url = 'http://localhost:3000/api/fetch/instagram';

    if (this.state.fetchInstagramBy === 'Username') {
      url = url + `?username=${this.fetchInstagramInput.value}`
    } else if (this.state.fetchInstagramBy === 'Hashtag') {
      url = url + `?tag=${this.fetchInstagramInput.value}`
    }

    styles.hide.display = 'initial'
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

  render() {


    return (
      <form id="fetchImageFromInstagram" onSubmit={this.fetchImagesFromInstagram}>
        <label>Enter Instagram <span className="fetch-instagram-by" style={styles.searchBy} onClick={this.switchFetchInstagramBy} >{this.state.fetchInstagramBy}</span></label>
        <input type="text" ref={(input) => { this.fetchInstagramInput = input; }} required/>
        <button type="submit">View Images</button>
        <div style={styles.hide}>
          <InstagramImages urls={this.state.fetchedFromInstagram} />
        </div>
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
  hide: {
    display: 'none'
  }
}
