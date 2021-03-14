import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = (props) => {
//   return <div>Hello, Michael</div>;
// }

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked = false
    };
  }

  render() {
    return (
      <div>Hello {this.props.name}</div>
      )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Hello name="World" />,
    root);
}
