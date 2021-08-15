// import React, { useState, useContext} from 'react';
// import { View, Text } from 'react-native';
// import {Button} from 'react-native-elements';

// import {AuthContext} from './../../navigation/authProvider'; 

// const Register = ({navigation}) => {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const [confirmPassword, setConfirmPassword] = useState();
    
//     const { regsiter} = useContext(AuthContext);
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text style={{ fontSize: 20 }}>Register Screen</Text>
//             <Button title="Register" buttonStyle={{margin: 10}} onPress={()=>{register(email, password)}}/>
//         </View>
//     );
// }
// export default Register;
import React, { useState, useContext} from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-elements';

import {AuthContext} from './../../navigation/authProvider'; 

const Register = ({navigation}) => {
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Register Screen</Text>
            <Button title="Register" buttonStyle={{margin: 10}}/>
        </View>
    );
}
export default Register;