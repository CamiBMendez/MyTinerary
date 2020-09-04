import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import mainReducer from './redux/reducers/mainReducer';

const myStore = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={myStore}>
   <React.StrictMode>
     <App />
   </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
