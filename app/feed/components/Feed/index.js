import React, { useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import HeaderSegware from '../../../common/components/Header';
import Field from '../../../common/components/Field';
import Item from '../../components/Item';
import { Formik } from 'formik';
import { initialValues } from '../../../login/components/Form/values';
import { loginFormValidationSchema } from '../../../login/components/Form/validation';
import { View, Text, Button } from 'native-base';

import styles from './styles';

const Feed = (props) => {
  const [isFetching, setIsFetching] = useState(false);

  const onRefresh = () => {
    setIsFetching(true);
    setTimeout(() => props.getFeeds(), 700);
    setIsFetching(false);
  };

  const updatedList = () => {
    setTimeout(() => props.getFeeds(), 700);
  };

  const renderItem = (item) => (
    <Item getFeeds={props.getFeeds} upVotes={props.upVotes} data={item} />
  );

  return (
    <Formik
      initialValues={initialValues()}
      validationSchema={loginFormValidationSchema}
    >
      {(formik) => (
        <View style={styles.container}>
          <HeaderSegware noLeft />
          <View style={styles.content}>
            {props.isLoading ? (
              <ActivityIndicator size="large" color="red" />
            ) : (
              <FlatList
                data={props.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                refreshing={isFetching}
                onRefresh={() => onRefresh()}
              />
            )}
          </View>
          <View style={styles.footer}>
            <Field
              buttonSend
              name="post"
              label="Escreva seu post..."
              formik={formik}
            />
            <Button
              block
              small
              style={styles.button}
              onPress={() => {
                props.postMessage(formik.values);
                formik.values.post = '';
                updatedList();
              }}
            >
              {props.isLoadingPost ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={styles.textButton}>ENVIAR</Text>
              )}
            </Button>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Feed;
