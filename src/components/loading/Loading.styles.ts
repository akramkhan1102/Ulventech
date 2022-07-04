import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  containerFull: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
    backgroundColor: '#000',
    top: 0,
    left: 0
  },
});

export default styles;