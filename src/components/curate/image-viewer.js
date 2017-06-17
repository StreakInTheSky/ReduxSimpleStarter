import React from 'react'

export default function ImageViewer(props) {
  return (
    <div className="image-container" style={styles.imageContainer}>
      <img src={props.image} style={styles.image}/>
    </div>
  )
}

const styles = {
  imageContainer: {
    display: 'inline-block',
    position: 'relative',
    minWidth: 500,
    minHeight: 500
  },
  image: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)'
  }
}
