import React from 'react';
import ReactDOM from 'react-dom';
import RouterContainer from './component/router-container';
import HelloRouter from './hello-router';

ReactDOM.render(
  <RouterContainer>
    <HelloRouter />
  </RouterContainer>,
  document.getElementById('app')
);
