import React from 'react';

export default class RouterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routers: []
    };

    window['_routerContainer'] = this;
  }

  render() {
    return (
      <div>
        {this.props.children}
        {this.state.routers.map((V, k) => <V key={k} />)}
      </div>
    );
  }

  registryRouter(router) {
    this.setState({
      routers: [...this.state.routers, router]
    });
  }
}
