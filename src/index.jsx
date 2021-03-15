import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app.jsx';

// const Hello = (props) => {
//   return <div>Hello, Michael</div>;
// }


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />
    root);
}
