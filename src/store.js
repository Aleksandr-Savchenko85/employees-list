import {
    applyMiddleware, compose, createStore, combineReducers,
  } from 'redux';
  import thunk from 'redux-thunk';
  import usersReducer from './redux/users.reducer';
  
  const appReducer = combineReducers({
    users: usersReducer,
  });
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
  
  export default store;
  