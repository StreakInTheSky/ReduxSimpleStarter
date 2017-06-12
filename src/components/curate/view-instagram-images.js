import React from 'react'

import Thumbnail from './thumbnail'

export default function InstagramImages(props) {
  const images = props.urls.map((image, index) => {
    return <Thumbnail src={image} key={index} />
  })

  return (
    <div className="instagram-box" style={styles.container}>
      <button style={styles.closeButton}>Close</button>
      {images}
    </div>

  )
}

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    maxHeight: '500px',
    backgroundColor: 'white',
    overflowY: 'scroll'
  },
  closeButton: {
    position: 'absolute',
    top: '-2em',
    right: 0,
    padding: '3px',
    backgroundColor: "white",
    cursor: 'pointer'
  },
}
