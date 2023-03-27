import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderReactDom = () => {
  root.render(  
    <Router/>
  );
};


renderReactDom();