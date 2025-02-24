import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import PaywallScreen from '../screens/paywall';
import TabNavigator from './TabNavigator';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const {isOnboardingCompleted} = useSelector(
    (state: RootState) => state.onboarding,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isOnboardingCompleted ? 'TabNavigator' : 'Onboarding'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen
          name="Paywall"
          component={PaywallScreen}
          options={{
            presentation: isOnboardingCompleted ? 'modal' : 'card',
            animation: isOnboardingCompleted
              ? 'slide_from_bottom'
              : 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
