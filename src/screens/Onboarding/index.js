import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => <Button title="Done" color="#000000" {...props} />;
const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Auth')}
      onDone={() => navigation.replace('Auth')}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('./../../assets/images/pl2.png')}
              style={{width: 300, height: 300}}
            />
          ),
          title: 'iP Profile',
          subtitle: 'Create your unique professional profile',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              source={require('./../../assets/images/pl1.png')}
              style={{width: 300, height: 300}}
            />
          ),
          title: 'iP Network',
          subtitle: 'Connect to the world of professionals',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              source={require('./../../assets/images/pl3.png')}
              style={{width: 300, height: 300}}
            />
          ),
          title: 'iP Tech News',
          subtitle: 'Be updated with trending technology',
        },
      ]}
    />
  );
};
export default OnboardingScreen;
