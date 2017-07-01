import React from 'react'

export default function ImageViewer(props) {
  return (
    <div className="image-viewer-container">
      <img className="viewed-image" src={props.image.path} />
    </div>
  )
}
