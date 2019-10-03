import {
    createStore,
    applyMiddleware,
    compose
  } from 'redux'
  import thunk from 'redux-thunk'
  import reducer from '../reducers'
  
  const middlewares = [thunk]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares)))
  // const store = createStore(
  //     reducer,
  //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //     applyMiddleware(...middlewares));
  export default store
  