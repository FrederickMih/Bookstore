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



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
