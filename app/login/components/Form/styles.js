import { StyleSheet } from 'react-native';
import { BASE_COLOR, PINK, TEXT_COLOR } from '../../../style/colors';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BASE_COLOR,
  },
  blockImage: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
    marginVertical: 0,
    paddingHorizontal: 20,
  },
  textCreate: {
    marginTop: 10,
    color: TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 15,
  },
  textFooter: {
    color: '#fff',
  },
  button: {
    backgroundColor: TEXT_COLOR,
  },
  view: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentFooter: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: BASE_COLOR,
  },
});

export default styles;
