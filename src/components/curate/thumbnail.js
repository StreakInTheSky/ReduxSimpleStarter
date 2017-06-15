import React from 'react'

export default function Thumbnail(props) {
  return (
    <div className="thumbnail-container" style={styles.imageContainer} ><img className="thumbnail" src={props.src} style={styles.image} onClick={props.chooseImages}/></div>
  )
}

const styles = {
  imageContainer: {
    display: 'inline-block',
    position: 'relative',
    margin: '5px',
    width: '15%',
    paddingBottom: '5%',
    minWidth: 100,
    minHeight: 100,
    overflow: 'hidden'
  },
  image: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)'
  }
}
