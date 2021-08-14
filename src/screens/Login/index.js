import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Image} from 'react-native-elements';

import styles from './styles';

const Login = ({navigation}) => (
  <View style={styles.container}>
    <Text>Its Profession</Text>

    <Text>For Your Career Growth</Text>
    <Text onPress={() => navigation.navigate('RegisterScreen')}>
      Not Registered? Register
    </Text>
  </View>
);
export default Login;
