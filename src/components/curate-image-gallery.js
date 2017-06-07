import React from 'react'

import Thumbnail from './curate-thumbnail'

export default function ImageGallery(props) {
  const image = props.images.map((image, index) => {
    return <Thumbnail src={image} key={index} />
  })

  return (
    <div>{image}</div>
  )
}
