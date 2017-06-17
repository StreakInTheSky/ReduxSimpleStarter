import {
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_ERROR,
  DELETE_IMAGE,
  VIEW_IMAGE
} from '../actions/curate'

const initialState = {
  addedImages: [],
  currentImage: null
}

export default function(state = initialState, action) {
  if (action.type === FETCH_IMAGE_SUCCESS) {
    return Object.assign({}, state, { addedImages: [...state.addedImages, action.payload] })
  } else if (action.type === FETCH_IMAGE_ERROR) {
    console.error(action.payload)
  } else if (action.type === DELETE_IMAGE) {
    console.log('deleting image')
    const images = [...state.addedImages]
    images.splice(action.payload, 1)
    return Object.assign({}, state, { addedImages: images })
  } else if (action.type === VIEW_IMAGE) {
    console.log('viewing image')
    return Object.assign({}, state, { currentImage: state.addedImages[action.payload] })
  }

  return state
}
