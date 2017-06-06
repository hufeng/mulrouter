import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

const WorldRouter = () => {
  return (
    <HashRouter basename="d2p">
      <div>
        <Route
          path="/hello"
          render={() => <div>d2p hello world /d2p/home</div>}
        />
      </div>
    </HashRouter>
  );
};

if (__DEV__) {
  ReactDOM.render(<WorldRouter />, document.getElementById('app'));
} else {
  _routerContainer && _routerContainer.registryRouter(WorldRouter);
}
