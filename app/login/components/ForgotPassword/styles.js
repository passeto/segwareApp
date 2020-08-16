import { StyleSheet } from 'react-native';
import { BASE_COLOR, PINK, TEXT_COLOR } from '../../../style/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BASE_COLOR,
  },
  content: {
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: TEXT_COLOR,
  },
});

export default styles;
