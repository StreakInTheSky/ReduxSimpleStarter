import React from 'react'

export default function ImageViewer(props) {
  return (
    <div>
      <img className={props.image ? '' : 'hidden' } src={props.image} style={styles.image}/>
    </div>
  )
}

const styles = {
  image: {
    height: '500px'
  }
}
