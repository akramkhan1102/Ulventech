import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      padding: 10,
      width: Dimensions.get('window').width - 20
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 10
    }
  });

export default styles