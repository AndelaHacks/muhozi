import axios from 'axios';
import { FETCHED_ARTICLES, FETCH_ARTICLES } from './ActionTypes';

export const fetchArticles = () => (dispatch) => {
  dispatch({ type: FETCH_ARTICLES });
  return axios
    .get('https://thibitisha.rabsms.online/posts')
    .then((response) => {
      dispatch({ type: FETCHED_ARTICLES, data: response.data.posts });
    })
    .catch(() => {
      alert('Something went wrong');
    });
};

export const postLink = () => (dispatch) => {
  dispatch({ type: FETCH_ARTICLES });
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      dispatch({ type: FETCHED_ARTICLES, data: response.data });
    })
    .catch(() => {
      alert('Something went wrong');
    });
};
