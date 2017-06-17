import React from 'react'

import Thumbnail from './thumbnail'
import ImageViewer from './image-viewer'

export default function ImageGallery(props) {
  const currentImage = <ImageViewer image={props.currentImage} />

  const images = props.images.map((image, index) => {
    return <Thumbnail src={image} key={index} index={index} deleteImage={props.deleteImage} viewImage={props.viewImage} />
  });


  return (
    <div className="adding-to-gallery">
      <h5>Images to add to gallery:</h5>
      {images}
      {currentImage}
    </div>
  )
}
