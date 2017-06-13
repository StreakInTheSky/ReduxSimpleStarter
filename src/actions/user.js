import 'isomorphic-fetch';
import axios from 'axios';

export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const fetchUserInfoSuccess = (data) => ({
    type: FETCH_USER_INFO_SUCCESS,
    payload: data
});

export const FETCH_USER_INFO_ERROR= 'FETCH_USER_INFO_ERROR';
export const fetchUserInfoError = (error) => ({
    type: FETCH_USER_INFO_ERROR,
    payload: error
});

export const fetchUserInfo = (username) => dispatch => {
  const url = `http://localhost:3000/api/user/${username}`;
  axios.get(url)
    .then(({data}) => dispatch(fetchUserInfoSuccess(data)))
    .catch(error => dispatch(fetchUserInfoError(error)))
}

export const registerUser = userInfo => dispatch => {
  const url = `http://localhost:3000/api/user`;

  axios.post(url, { data: userInfo })
  .then(() => console.log("Registered the User"))
  .catch(error => console.error(error));
}
