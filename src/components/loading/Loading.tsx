import React, { PureComponent } from "react";
import { View , Text, ActivityIndicator } from 'react-native';
import styles from "./Loading.styles";


class Loading extends PureComponent {
  

  render () {
    return (
      <View style={styles.containerFull}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default Loading;
