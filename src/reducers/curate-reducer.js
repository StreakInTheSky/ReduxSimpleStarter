import {
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_ERROR,
  DELETE_IMAGE,
  VIEW_IMAGE,
  UNVIEW_IMAGE,
  ADD_TITLE,
  ADD_DESCRIPTION,
  ADD_TAG,
  REMOVE_TAG
} from '../actions/curate'

const initialState = {
  title: '',
  description: '',
  addedImages: [],
  currentImage: null,
  tags: [],
  user: 'StreakInTheSky'
}

export default function(state = initialState, action) {
  if (action.type === FETCH_IMAGE_SUCCESS) {
    return Object.assign({}, state, { addedImages: [...state.addedImages, action.payload] })
  } else if (action.type === FETCH_IMAGE_ERROR) {
    console.error(action.payload)
  } else if (action.type === DELETE_IMAGE) {
    const images = [...state.addedImages]
    images.splice(action.payload, 1)
    return Object.assign({}, state, { addedImages: images })
  } else if (action.type === VIEW_IMAGE) {
    return Object.assign({}, state, { currentImage: state.addedImages[action.payload] })
  } else if (action.type === UNVIEW_IMAGE) {
    return Object.assign({}, state, { currentImage: null })
  } else if (action.type === ADD_TITLE) {
    return Object.assign({}, state, { title: action.payload })
  } else if (action.type === ADD_DESCRIPTION) {
    return Object.assign({}, state, { description: action.payload })
  } else if (action.type === ADD_TAG) {
    const newTag = { key: action.key, text: action.tag}
    return Object.assign({}, state, { tags: [...state.tags, newTag] })
  } else if (action.type === REMOVE_TAG) {
    const tags = [...state.tags]
    tags.splice(action.payload, 1)
    return Object.assign({}, state, { tags: tags })
  }
  console.log(state)
  return state
}
