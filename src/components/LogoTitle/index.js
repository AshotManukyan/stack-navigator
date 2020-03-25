import {Image} from 'react-native';
import React from 'react';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../../../assets/images/favicon.png')}
    />
  );
}

export default LogoTitle;

