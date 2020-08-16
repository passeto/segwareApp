import React from 'react';
import Login from '../screens/LoginScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';

const LoginContainer = (props) => {
  return <Login makeLogin={props.makeLogin} isLoading={props.isLoading} />;
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
