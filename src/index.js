import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css'
// import cartReducer from './Components/reducers/cartReducer';
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';

// const store = createStore(cartReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <Provider store={store}>
  // <App />
  // </Provider>,
  document.getElementById('root')
);
