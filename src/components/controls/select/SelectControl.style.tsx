import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    buttonStye: {
      width: Dimensions.get('window').width - 20,
      flex: 1,
      flexDirection: 'column',
      borderWidth: 1,
      padding: 10
    },
    buttonTextStyle: {
      alignSelf: 'flex-start', 
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 10,
    }
  });

export default styles