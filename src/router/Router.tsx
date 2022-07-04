import React, { PureComponent } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { IRootState } from "../models";
import { connect } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from "../screens";
import { navigationRef } from "../services/navigation/rootNavigation";
const Stack = createNativeStackNavigator();
class Router extends PureComponent {

    render () {
        return (
            <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                    <Stack.Screen name="Form" component={screens.authScreens.Home} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

const mapStateToProps = (state: IRootState) => ({
    auth: state.auth,
  });
  
  
  const mapDispatchToProps = {
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Router)
  