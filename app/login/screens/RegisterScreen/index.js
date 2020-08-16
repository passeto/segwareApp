import React from 'react';
import { View } from 'native-base';
import FormRegister from '../../components/FormRegister';

const RegisterScreen = (props) => {
  return (
    <FormRegister
      isLoading={props.isLoading}
      onRequestSend={(values) => props.register(values)}
    />
  );
};

export default RegisterScreen;
