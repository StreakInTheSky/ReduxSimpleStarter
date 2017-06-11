import React from 'react'

import Thumbnail from './curate-thumbnail'

export default function InstagramImages(props) {
  const image = props.urls.map((image, index) => {
    return <Thumbnail src={image} key={index} />
  })

  return (
    <div className="instagram-box">
      <button className="closeButton">Close</button>
      {image}
    </div>

  )
}

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    backgroundColor: 'white',
    overflowY: 'scroll'
  },
  closeButton: {
    position: 'absolute',
    top: '-2em',
    right: 0,
    padding: '3px',
    backgroundColor: "white",
    cursor: 'pointer'
  },
}
