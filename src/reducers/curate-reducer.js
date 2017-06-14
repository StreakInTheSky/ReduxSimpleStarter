import {
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_ERROR
} from '../actions/curate'

const initialState = {
  addedImages: []
}

export default function(state = initialState, action) {
  if (action.type === FETCH_IMAGE_SUCCESS) {
    return Object.assign({}, state, { addedImages: [...state.addedImages, action.payload]})
  } else if (action.type === FETCH_IMAGE_ERROR) {
    console.error(action.payload)
  }

  return state
}
