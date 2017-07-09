import 'isomorphic-fetch';
import axios from 'axios';

export const FETCH_GALLERY_INFO_SUCCESS = 'FETCH_GALLERY_INFO_SUCCESS';
export const fetchGalleryInfoSuccess = (data) => ({
    type: FETCH_GALLERY_INFO_SUCCESS,
    payload: data
});

export const FETCH_GALLERY_INFO_ERROR= 'FETCH_GALLERY_INFO_ERROR';
export const fetchGalleryInfoError = (error) => ({
    type: FETCH_GALLERY_INFO_ERROR,
    payload: error
});

export const fetchGalleryInfo = (galleryId) => dispatch => {
  const url = `http://localhost:3000/api/gallery/${galleryId}`;
  axios.get(url)
    .then(({data}) => dispatch(fetchGalleryInfoSuccess(data)))
    .catch(error => dispatch(fetchGalleryInfoError(error)))
}
