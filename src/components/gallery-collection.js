import React from 'react';

import Thumbnail from './gallery-thumbnail'

export default function(props) {
  const images = props.images.map((image, index) => {
    return <Thumbnail
            src={image.path}
            key={image._id}
            imageId={image._id} />
  });


  return (
    <div className="thumbnails">
      {images}
    </div>
  )
}
