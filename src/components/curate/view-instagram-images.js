import React from 'react'

import Thumbnail from './thumbnail'

export default function InstagramImages(props) {
  const images = props.urls.map((image, index) => {
    return <Thumbnail src={image} key={index} chooseImages={props.chooseImages} />
  })

  return (
    <div className="instagram-box" style={styles.container}>
        {images}
    </div>

  )
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxHeight: '500px',
    backgroundColor: 'white',
    overflowY: 'scroll'
  }
}
