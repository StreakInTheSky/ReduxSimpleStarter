import axios from 'axios';

import firebase from '../firebase'

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = (user, token) => ({
    type: FETCH_USER_SUCCESS,
    payload: {user, token}
});

export const FETCH_USER_ERROR= 'FETCH_USER_ERROR';
export const fetchUserError = (error) => ({
    type: FETCH_USER_ERROR,
    payload: error
});

export const SIGNOUT_USER_SUCCESS = 'SIGNOUT_USER_SUCCESS';
export const signOutUserSuccess = () => ({
    type: SIGNOUT_USER_SUCCESS,
});

export const SIGNOUT_USER_ERROR= 'SIGNOUT_USER_ERROR';
export const signOutUserError = (error) => ({
    type: SIGNOUT_USER_ERROR,
    payload: error
});

export const registerUser = userInfo => dispatch => {
  const url = `http://localhost:3000/api/user`;

  axios.post(url, { data: userInfo })
  .then(() => console.log("Registered the User"))
  .catch(error => console.error(error));
}

export const authenticate = userInfo => dispatch => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;

      const url = `http://localhost:3000/api/auth/`;
      axios.post(url, {uid: user.uid, username: user.displayName})
        .then(({data}) => dispatch(fetchUserSuccess(data, token)))
        .catch(error => dispatch(fetchUserError(error)))

    })
    .catch(error => dispatch(fetchUserError(error)))
}

export const signOut = userInfo => dispatch => {
  firebase.auth().signOut()
    .then(function(result) {
      dispatch(signOutUserSuccess())
    })
    .catch(error => dispatch(signOutUserError(error)))
}
