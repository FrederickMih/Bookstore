import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import booksReducers from './reducers/books';
import App from './components/App';

const initState = [
  {
    id: new Date().getTime().toString(),
    title: 'titleOne',
    category: 'Sci-Fi',
  },
  {
    id: new Date().getTime().toString(),
    title: 'titleTwo',
    category: 'Action',
  },
  {
    id: new Date().getTime().toString(),
    title: 'titleThree',
    category: 'Biography',
  },
  {
    id: new Date().getTime().toString(),
    title: 'titleFour',
    category: 'Kids'
  }
];

const store = createStore(booksReducers, initState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
