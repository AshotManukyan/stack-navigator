import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './components/DetailsScreen';
import HomeScreen from './components/HomeScreen';
import LogoTitle from "./components/LogoTitle";
import React, {Component} from 'react';
import {Button} from 'react-native';

const Stack = createStackNavigator();

class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerTitle: props => <LogoTitle {...props} />,
              // headerRight: () => (
              //   <Button
              //     onPress={() => alert('This is a button!')}
              //     title="Info"
              //     color="#000"
              //   />
              // ),
            }}
          />
          <Stack.Screen
            name='Details'
            component={DetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;
