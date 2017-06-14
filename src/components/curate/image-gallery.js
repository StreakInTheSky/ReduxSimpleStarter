import React from 'react'

import Thumbnail from './thumbnail'

export default function ImageGallery(props) {
  const images = props.images.map((image, index) => {
    return <Thumbnail src={image} key={index} />
  })

  return (
    <div>{images}</div>
  )
}
