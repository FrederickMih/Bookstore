import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import booksReducers from './reducers/books';
// import rootReducer from './reducers';

const initState = [
  {
    id: new Date().getTime().toString(),
    title: 'titleOne',
    category: 'Sci-Fi',
  },
  {
    id: Math.random() * 10,
    title: 'titleTwo',
    category: 'Action',
  },
  {
    id: Math.random() * 10,
    title: 'titleThree',
    category: 'Biography',
  },
  {
    id: Math.random() * 10,
    title: 'titleFour',
    category: 'Kids',
  },
];

const store = createStore(booksReducers, initState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
