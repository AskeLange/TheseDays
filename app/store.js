

// Imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import navigation from './reducers/navigation';
import products from './reducers/products';

// Gets the compose enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// Creates root reducer n' middleware
const rootReducer = combineReducers ({ navigation, products });
const middleware  = composeEnhancers == null ? applyMiddleware ( thunk ) : 
  composeEnhancers( applyMiddleware ( thunk ) );

// Creates store n' exports
const store = createStore( rootReducer, middleware );
export default store;