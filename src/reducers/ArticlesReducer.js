import {
  FETCH_ARTICLES,
  FETCHED_ARTICLES,
} from '../actions/ActionTypes';
/**
 * Articles Reducer
 */
const initialState = {
  loading: false,
  error: false,
  logged_in: false,
  errors: {},
  articles: [],
  message: null,
};
export default function ArticlesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        loading: true,
        error: false,
        errors: {},
        message: 'Loading articles...',
      };
    case FETCHED_ARTICLES:
      return {
        ...state,
        loading: false,
        error: false,
        errors: {},
        articles: action.data,
        message: 'Successfully loaded',
      };
    default:
      return state;
  }
}
