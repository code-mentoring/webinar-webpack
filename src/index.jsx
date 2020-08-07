import React from 'react';

import ReactDom from 'react-dom';

import './styles/base.scss'; // Import SASS inside JSX ?????
import banner from './images/banner.jpg';


ReactDom.render(
  <main>
    <img src={banner} alt="Banner"/>
    <h1>Hello, Code Mentoring</h1>
  </main>,
  document.getElementById('app')
);
