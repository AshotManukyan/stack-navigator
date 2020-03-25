import homeScreen from '../../../assets/styles/HomeScreen';
import {View, Text, Button} from 'react-native';
import React from 'react';

function HomeScreen(props) {
  const {navigation} = props;
  const itemId = props.route.params?.itemId;

    return (
        <View style={homeScreen.container}>
            <Text>Home Screen</Text>
            <Text>{itemId && itemId}</Text>
            <Button title='Go to Details' onPress={() => {
              navigation.navigate('Details');
              navigation.setParams({itemId: 125})
            }} />
        </View>
    );
}

export default HomeScreen;
