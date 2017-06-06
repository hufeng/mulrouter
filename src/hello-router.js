import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

export default class HelloRouter extends React.Component {
  render() {
    return (
      <div>
        <div>hello world!!!</div>
        <HashRouter basename="home">
          <div>
            <Route path="/hello" render={() => <div>hello /home/hello</div>} />
          </div>
        </HashRouter>
      </div>
    );
  }
}
