import React from 'react';
import RegisterScreen from '../screens/RegisterScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';

const RegisterContainer = (props) => {
  return (
    <RegisterScreen isLoading={props.isLoading} register={props.register} />
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
