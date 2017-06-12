import React from 'react'

export default function Thumbnail(props) {
  return (
    <div style={styles.imageContainer} ><img src={props.src} style={styles.image} onClick={props.chooseImages}/></div>
  )
}

const styles = {
  imageContainer: {
    display: 'inline-block',
    position: 'relative',
    margin: '5px',
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
