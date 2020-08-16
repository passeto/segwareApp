import React from 'react';
import ForgotPassword from '../../components/ForgotPassword';

const ForgotPasswordScreen = (props) => {
  return (
    <ForgotPassword
      isLoading={props.isLoading}
      onRequestSend={(values) => props.forgotPassword(values)}
    />
  );
};

export default ForgotPasswordScreen;
