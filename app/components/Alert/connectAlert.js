import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';

const connectAlert = (WrappedComponent) => {
  const ConnectedAlert = (props, context) => {
    const { alertWithType, alert } = context;
    return (
      <WrappedComponent
        {...props}
        alertWithType={alertWithType}
        alert={alert}
      />
    );
  };

  ConnectedAlert.contextTypes = {
    alertWithType: PropTypes.func,
    alert: PropTypes.func,
  };

  return hoistNonReactStatic(ConnectedAlert, WrappedComponent);
};

export default connectAlert;
