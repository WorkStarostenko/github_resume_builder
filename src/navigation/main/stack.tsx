import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from 'screens/home/screen';
import ResumeScreen from 'screens/resume/screen';

import {MainStackParamsList} from './types';

const Stack = createStackNavigator<MainStackParamsList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{title: 'Resume', headerBackTitleVisible: false}}
        name="Resume"
        component={ResumeScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
