import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-elements';

import { AuthContext} from './../../navigation/authProvider';

const Home = () => {
    const [user, logout] = useContext(AuthContext);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Home Screen</Text>
            <Text>Welcome {user.uid}</Text>
            <Button title="Logout" onPress={() =>logout()}/>
        </View>
    );
}
export default Home;