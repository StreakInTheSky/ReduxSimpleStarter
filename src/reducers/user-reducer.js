import {
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  SIGNOUT_USER_SUCCESS,
  SIGNOUT_USER_ERROR,
} from '../actions/user'

const initialState = {
  favorites: [],
  followers: [],
  following: [],
  galleries: [],
  id: '',
  username: '',
  token: '',
  user: null
}

export default function(state = initialState, action) {
  if (action.type === FETCH_USER_SUCCESS) {
    console.log(action.payload)
    state = Object.assign({}, state, action.payload)
  } else if (action.type === FETCH_USER_ERROR) {
    console.error(action.payload)
  } else if (action.type === SIGNOUT_USER_SUCCESS) {
    state = Object.assign({}, initialState)
  } else if (action.type === SIGNOUT_USER_ERROR) {
    console.error(action.payload)
  }

  return state
}
