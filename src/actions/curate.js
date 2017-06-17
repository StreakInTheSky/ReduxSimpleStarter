import axios from 'axios';

export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const fetchImageSuccess = (data) => ({
    type: FETCH_IMAGE_SUCCESS,
    payload: data
});

export const FETCH_IMAGE_ERROR= 'FETCH_IMAGE_ERROR';
export const fetchImageError = (error) => ({
    type: FETCH_IMAGE_ERROR,
    payload: error
});

export const fetchImage = (imageUrl) => dispatch => {
  axios.get(`http://localhost:3000/api/fetch/image-url?imageUrl=${imageUrl}`, { responseType: 'blob' })
    .then(({data}) => dispatch(readFile(data)))
    .catch(error => dispatch(fetchImageError(error)))
};

export const readFile = (data) => dispatch => {
  const reader = new FileReader()
  reader.onloadend = () => dispatch(fetchImageSuccess(reader.result))
  reader.onerror = (error) => dispatch(fetchImageError(error))
  reader.readAsDataURL(data)
};

export const DELETE_IMAGE = 'DELETE_IMAGE';
export const deleteImage = (imageKey) => ({
  type: DELETE_IMAGE,
  payload: imageKey
});

export const VIEW_IMAGE = 'VIEW_IMAGE';
export const viewImage = (imageKey) => ({
  type: VIEW_IMAGE,
  payload: imageKey
});
