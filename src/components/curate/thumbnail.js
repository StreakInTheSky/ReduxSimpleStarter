import React from 'react'

import * as actions from '../../actions/curate'

export default function Thumbnail(props) {
  const deleteImage = () => {
    props.deleteImage(props.index);
  }

  return (

      <div className="thumbnail-container" style={styles.imageContainer} >
        <span className="image-delete" style={styles.delete} onClick={deleteImage}>&#10005;</span>
        <img className="thumbnail" src={props.src} style={styles.image}  />
      </div>

  )
}

const styles = {
  imageContainer: {
    display: 'inline-block',
    position: 'relative',
    minWidth: 100,
    minHeight: 100,
  },
  delete: {
    display: 'inline-block',
    position: 'absolute',
    top: '-9px',
    right: '-6px'
  },
  image: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)'
  }
}
