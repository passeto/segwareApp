import { StyleSheet } from 'react-native';
import { BASE_COLOR, TEXT_COLOR } from '../../../style/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLOR,
  },
  content: {
    flex: 5,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    flex: 0.8,
    flexDirection: 'row',
    borderBottomColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: TEXT_COLOR,
    height: '50%',
    width: '28%',
    marginTop: 25,
  },
  textButton: {
    color: '#fff',
  },
});

export default styles;
