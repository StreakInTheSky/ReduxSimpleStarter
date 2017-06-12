import React from 'react'

export default function CurateUpload(props) {

  const uploadImages = event => {
    const files = event.target.files
    for (let i = 0; i < files.length; i++) {
      props.addImages(files[i])
    }
  }

  return (
    <form id="uploadImage">
      <label htmlFor="upload"><span>Upload</span></label>
      <input id="upload" style={styles.upload} type="file" onChange={uploadImages} accept="image/*" multiple />
    </form>
    )
}

const styles = {
  upload: {
    display: 'none'
  }
}
