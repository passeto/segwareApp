import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Text, Button } from 'native-base';
import HeaderSegware from '../../../common/components/Header';
import Field from '../../../common/components/Field';
import { BASE_COLOR, PINK, TEXT_COLOR } from '../../../style/colors';
import { Formik } from 'formik';
import { initialValues } from '../Form/values';
import { loginFormValidationSchema } from '../Form/validation';
import styles from './styles';

const FormRegister = (props) => {
  const { onRequestSend, isLoading } = props;
  return (
    <Formik
      initialValues={initialValues()}
      validationSchema={loginFormValidationSchema}
    >
      {(formik) => (
        <View style={{ flex: 1, backgroundColor: BASE_COLOR }}>
          <HeaderSegware />
          <View style={{ paddingVertical: 50, paddingHorizontal: 15 }}>
            <Field name="username" label="Usuário" formik={formik} />
            <Field
              name="password"
              label="Senha"
              secureTextEntry={true}
              formik={formik}
            />
            <Field
              name="passwordConfirmation"
              label="Confirmar Senha"
              secureTextEntry={true}
              formik={formik}
            />
            <Button
              block
              style={styles.button}
              onPress={() => onRequestSend(formik.values)}
            >
              {isLoading ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text style={styles.textLogin}>CADASTRAR</Text>
              )}
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default FormRegister;
