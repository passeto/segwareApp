import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Card } from 'native-base';
import moment from 'moment';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import styles from './styles';

const Item = (props) => {
  const updatedList = () => {
    setTimeout(() => props.getFeeds(), 700);
  };
  return (
    <View style={styles.item}>
      <Card style={styles.cardColor}>
        <View>
          <Text style={styles.author}>{props.data.item.author.username}:</Text>
        </View>
        <View style={styles.content}>
          <Text>{props.data.item.content}</Text>
        </View>
        <View style={styles.contentDate}>
          <Text style={styles.textDate}>
            {moment(props.data.item.createdAt).format('DD/MM/YYYY HH:mm')}
          </Text>
        </View>
      </Card>
      <View style={styles.contentReaction}>
        <Text style={styles.textLike}>{props.data.item.likes}</Text>
        <TouchableOpacity
          onPress={() => {
            props.upVotes(props.data.item.id, true, false);
            updatedList();
          }}
        >
          <Icon
            style={styles.icons}
            color={'#29a1d3'}
            size={30}
            name="thumbs-up"
          />
        </TouchableOpacity>
        <Text style={styles.textLove}>{props.data.item.loves}</Text>
        <TouchableOpacity
          onPress={() => {
            props.upVotes(props.data.item.id, false, true);
            updatedList();
          }}
        >
          <Icon style={styles.icons} color={'red'} size={30} name="heart" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
