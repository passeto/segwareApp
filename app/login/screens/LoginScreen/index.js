import React from 'react';
import Form from '../../components/Form';

const Login = (props) => {
  return (
    <>
      <Form
        isLoading={props.isLoading}
        onRequestSend={(values) => props.makeLogin(values)}
      />
    </>
  );
};

export default Login;
