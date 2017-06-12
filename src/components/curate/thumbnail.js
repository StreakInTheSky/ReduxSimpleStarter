import React from 'react'

export default function Thumbnail(props) {
  return (
    <div style={styles.imageContainer} ><img src={props.src} style={styles.image}/></div>
  )
}

const styles = {
  imageContainer: {
    position: 'relative',
    margin: '0 5px',
    width: '100px',
    height: '100px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  }
}
