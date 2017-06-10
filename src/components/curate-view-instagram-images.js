import React from 'react'

import Thumbnail from './curate-thumbnail'

export default function InstagramImages(props) {
  const image = props.urls.map((image, index) => {
    return <Thumbnail src={image} key={index} />
  })

  return (
    <div>{image}</div>
    // <div className="overlay" style={styles.overlay}>
    //   <div className="modal-box" style={styles.box}>
    //     <div style={styles.content}>
    //       {image}
    //     </div>
    //     <div style={styles.closeButton} className="close-button">close</div>
    //   </div>
    // </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    position: 'relative',
    width: '90%',
    height: '90%',
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
  content: {
    padding: '10px'
  },

}
