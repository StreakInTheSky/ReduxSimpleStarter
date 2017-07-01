import {
  VIEW_IMAGE
} from '../actions/gallery'

const initialState = {
  votedImages: []
}

export default function(state = initialState, action) {
  if (action.type === VIEW_IMAGE) {
    state = Object.assign({}, state, { votedImages: state.addedImages[action.payload] })
  }

  return state
}
