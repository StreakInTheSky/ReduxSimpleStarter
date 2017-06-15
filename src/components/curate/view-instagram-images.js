import React from 'react'

import Thumbnail from './thumbnail'

export default function InstagramImages(props) {
  const images = props.urls.map((image, index) => {
    return <Thumbnail src={image} key={index} chooseImages={props.chooseImages} />
  })

  return (
    <div className="instagram-box" style={styles.box} >
      <div className="close" style={styles.close} onClick={props.close}>&#10006;</div>
      <header>
        <p>Choose the images you want to add to your gallery: </p>
      </header>
      <section className="instagramImages" style={styles.container}>
        {images}
      </section>
      <div style={styles.footer}>
        <button type="button" onClick={props.addImages} >Add Images</button>
      </div>
    </div>

  )
}

const styles = {
  box: {
    position: 'relative',
    border: '1px solid lightgray',
    padding: '5px 10px'
  },
  close: {
    position: 'absolute',
    right: 5,
    cursor: 'pointer',
    color: 'gray',
    fontSize: '20px'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    maxHeight: '500px',
    backgroundColor: 'white',
    overflowY: 'scroll'
  },
  footer: {
    display: 'flex',
    marginTop: 5,
    paddingTop: 10,
    justifyContent: 'flex-end'
  }
}
