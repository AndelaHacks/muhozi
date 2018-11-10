import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = () => {
  /* eslint no-underscore-dangle: 0 */
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
  return store;
};

export default configureStore();
