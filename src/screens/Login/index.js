// import React, {useState, useContext} from 'react';
// import {TouchableOpacity} from 'react-native';
// import {View, Text, TextInput} from 'react-native';
// import {Image, Button, Divider} from 'react-native-elements';

// import {AuthContext} from './../../navigation/authProvider';

// import styles from './styles';

// const Login = ({navigation}) => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const login = useContext(AuthContext);

//   return (
//     <View style={styles.container}>
//       <View style={styles.titleSection}>
//         <Text style={styles.title}>ItsProfession</Text>
//         <Text style={styles.subTitle}>App For Your Career Growth</Text>
//       </View>

//       <Image
//         source={require('./../../assets/images/loginImage.png')}
//         style={{width: 200, height: 200}}
//       />

//       <View style={styles.inputFields}>
//         <Button title="Login" onPress={() => login(email, password)}/>
//       </View>

//       <View style={styles.registerOption}>
//         <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
//           <Text>Not Registered? Register</Text>
//         </TouchableOpacity>
//       </View>

//       <Divider orientation="vertical" />

//       <View style={styles.loginOptions}>
//         <Button title="Google Login" buttonStyle={{margin: 10}} />
//         <Button title="Facebook Login" buttonStyle={{margin: 10}} />
//       </View>
//     </View>
//   );
// };
// export default Login;
import React, {useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, TextInput} from 'react-native';
import {Image, Button, Divider} from 'react-native-elements';

import {AuthContext} from './../../navigation/authProvider';

import styles from './styles';

const Login = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>ItsProfession</Text>
        <Text style={styles.subTitle}>App For Your Career Growth</Text>
      </View>

      <Image
        source={require('./../../assets/images/loginImage.png')}
        style={{width: 200, height: 200}}
      />

      <View style={styles.inputFields}>
        <Button title="Login"/>
      </View>

      <View style={styles.registerOption}>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text>Not Registered? Register</Text>
        </TouchableOpacity>
      </View>

      <Divider orientation="vertical" />

      <View style={styles.loginOptions}>
        <Button title="Google Login" buttonStyle={{margin: 10}} />
        <Button title="Facebook Login" buttonStyle={{margin: 10}} />
      </View>
    </View>
  );
};
export default Login;
