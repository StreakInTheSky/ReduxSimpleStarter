import React from 'react'

// import * as actions from '../../actions/curate'

export default class Thumbnail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: false
    }

    this.toggleSelectImage = this.toggleSelectImage.bind(this)
  }

  toggleSelectImage(event) {
    this.setState({ selected: !this.state.selected })
    this.props.toggleChosen(event.target.getAttribute('src'))
  }

  render(){
    return (
      <div className={ this.state.selected ? "thumbnail-container selected" : "thumbnail-container"} style={styles.imageContainer} >
        <img className="thumbnail" src={this.props.src} style={styles.image} onClick={this.toggleSelectImage} />
      </div>
    )
  }
}

const styles = {
  imageContainer: {
    position: 'relative',
    width: 75,
    height: 75
  },
  image: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)'
  }
}
