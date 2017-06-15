import React from 'react'

import Thumbnail from './thumbnail'

export default function ImageGallery(props) {
  const images = props.images.map((image, index) => {
    return <Thumbnail src={image} key={index} index={index} deleteImage={props.deleteImage} />
  })

  return (
    <div className="adding-to-gallery">
      <h5>Images to add to gallery:</h5>
      {images}
    </div>
  )
}
