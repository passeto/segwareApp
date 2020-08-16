import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#c9c9c9',
    marginHorizontal: 10,
    marginBottom: 15,
  },
  cardColor: {
    backgroundColor: '#DBDBDB',
  },
  author: {
    opacity: 0.3,
    fontWeight: 'bold',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  contentDate: {
    alignItems: 'flex-end',
  },
  textDate: {
    opacity: 0.1,
  },
  contentReaction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textLike: {
    opacity: 0.6,
    color: '#29a1d3',
  },
  textLove: {
    opacity: 0.5,
    color: 'red',
  },
  icons: {
    paddingHorizontal: 10,
  },
});

export default styles;
