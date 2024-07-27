import React from 'react';

class StaticContainer extends React.Component {
  shouldComponentUpdate = (nextProps) => !!nextProps.shouldUpdate;

  render() {
    const { children } = this.props;
    const child = children;
    if (child === null || child === false) {
      return null;
    }

    return React.Children.only(child);
  }
}

export default StaticContainer;
