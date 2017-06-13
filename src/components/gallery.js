import React from 'react';

export default function(props) {
  console.log(props)
  return (
    <div className="gallery">
      <h3>{() => { return (props.GalleryName || 'untitled')}}</h3>
    </div>
  )
}
