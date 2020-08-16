import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Text, Button } from 'native-base';
import HeaderSegware from '../../../common/components/Header';
import Field from '../../../common/components/Field';
import { BASE_COLOR } from '../../../style/colors';
import { Formik } from 'formik';
import { initialValues } from '../Form/values';
import { loginFormValidationSchema } from '../Form/validation';

import styles from './styles';

const ForgotPassword = (props) => {
  const { onRequestSend, isLoading } = props;
  return (
    <Formik
      initialValues={initialValues()}
      validationSchema={loginFormValidationSchema}
    >
      {(formik) => (
        <View style={styles.container}>
          <HeaderSegware />
          <View style={styles.content}>
            <Field name="username" label="Usuário" formik={formik} />
            <Button
              block
              style={styles.button}
              onPress={() => onRequestSend(formik.values)}
            >
              {isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text>RECUPERAR SENHA</Text>
              )}
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default ForgotPassword;
