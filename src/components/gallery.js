import React from 'react';

export default function(props) {
  const {title, description, username, images} = props.gallery

  const collection = images.map(image => <GalleryCollection image={image} />)

  return (
    <div className="gallery">
      <h3>{title}</h3>
      <p>{description}</p>

    </div>
  )
}
