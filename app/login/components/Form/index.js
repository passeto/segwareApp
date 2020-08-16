import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Icon,
  Label,
  Input,
  Button,
  Content,
  View,
  Row,
} from 'native-base';
import { Formik } from 'formik';
import { initialValues } from './values';
import { loginFormValidationSchema } from './validation';
import Field from '../../../common/components/Field';
import * as Navigator from '../../../services/navigator';
import { BASE_COLOR, PINK, TEXT_COLOR } from '../../../style/colors';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Form = (props) => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [iconPassword, setIconPassword] = useState('eye');
  const { onRequestSend, isLoading } = props;
  return (
    <Formik
      initialValues={initialValues()}
      validationSchema={loginFormValidationSchema}
    >
      {(formik) => (
        <>
          <Content style={styles.content}>
            <View style={styles.blockImage}>
              <Image
                style={styles.image}
                source={require('../../images/logo.png')}
              />
            </View>
            <View style={styles.block}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.view}>
                  <Field name="username" label="Usuário" formik={formik} />
                  <Field
                    name="password"
                    label="Senha"
                    secureTextEntry={true}
                    formik={formik}
                  />
                  <Button
                    block
                    style={styles.button}
                    onPress={() => onRequestSend(formik.values)}
                  >
                    {props.isLoading ? (
                      <ActivityIndicator size="large" color="white" />
                    ) : (
                      <Text style={styles.textLogin}>Acessar</Text>
                    )}
                  </Button>
                  <TouchableOpacity
                    style={{ marginTop: 25 }}
                    onPress={() => navigation.navigate('ForgotPassword')}
                  >
                    <Text style={styles.textCreate}>Esqueci minha senha</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </Content>
          <View style={styles.contentFooter}>
            <Text style={styles.textFooter}>Não possuí acesso? </Text>
            <TouchableOpacity
              style={{ marginTop: 25 }}
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.textCreate}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Formik>
  );
};

export default Form;
