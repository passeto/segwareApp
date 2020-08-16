import React from 'react';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';

const ForgotPasswordContainer = (props) => {
  return (
    <ForgotPasswordScreen
      isLoading={props.isLoading}
      forgotPassword={props.forgotPassword}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordContainer);
