import React from 'react'

import Thumbnail from './thumbnail'
import ImageViewer from './image-viewer'

export default function ImageGallery(props) {
  const images = props.images.map((image, index) => {
    return <Thumbnail
            src={image}
            key={index}
            index={index}
            deleteImage={props.deleteImage}
            viewImage={props.viewImage}
            unviewImage={props.unviewImage} />
  });


  return (
    <section className="adding-to-gallery">
      <h5>Images in gallery:</h5>
      {images}
      <ImageViewer image={props.currentImage} />
    </section>
  )
}
