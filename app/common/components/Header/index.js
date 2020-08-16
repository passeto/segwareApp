import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import * as Navigator from '../../../services/navigator';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

const HeaderSegware = (props) => {
  const navigation = useNavigation();
  return (
    <Header androidStatusBarColor="#1d2225" transparent>
      <Left>
        {props.noLeft ? null : (
          <Button onPress={() => navigation.goBack()} transparent>
            <Icon name="arrow-back" />
          </Button>
        )}
      </Left>
      <Body
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{ height: '70%', width: '65%' }}
          source={require('../../images/segware.png')}
        />
      </Body>
    </Header>
  );
};

export default HeaderSegware;
