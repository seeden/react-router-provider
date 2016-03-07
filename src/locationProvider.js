import { PropTypes, Component, createElement } from 'react';
import inherits from 'inherits';
import hoistNonReactStatics from 'hoist-non-react-statics';

function createComponent(CurrentComponent) {
  function Provider(...args) {
    Component.apply(this, args);
  }

  inherits(Provider, Component);

  const componentName = CurrentComponent.displayName || CurrentComponent.name;
  Provider.displayName = componentName + 'LocationProvider';
  Provider.contextTypes = {
    location: PropTypes.object,
  };

  Provider.prototype.render = function render() {
    return createElement(CurrentComponent, {
      ...this.props,
      location: this.context.location,
    });
  };

  hoistNonReactStatics(Provider, CurrentComponent);

  return Provider;
}

export default function provide(...args) {
  // support decorator pattern
  if (args.length === 0) {
    return (ComponentToDecorate) => createComponent(ComponentToDecorate);
  }

  return createComponent.apply(null, args);
}