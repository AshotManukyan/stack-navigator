import detailsScreen from '../../../assets/styles/DetailsScreen';
import {View, Text, Button} from 'react-native';
import React from 'react';

function DetailsScreen(props) {
  const {navigation} = props;

  return (
    <View style={detailsScreen.container}>
      <Text>Details Screen</Text>
      <Button title={'Go to Details again'} onPress={() => {navigation.push('Details')}} />
      <Button title={'Go to Home screen'} onPress={() => navigation.navigate('Home')} />
      <Button title={'Go Back'} onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailsScreen;
