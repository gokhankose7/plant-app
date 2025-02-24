import React from 'react';
import type {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Image} from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import DiagnoseScreen from '../screens/diagnose';
import ScanScreen from '../screens/scan';
import MyGardenScreen from '../screens/myGarden';
import ProfileScreen from '../screens/profile';
import {colors} from '../utils/colors';
import type {TabParamList} from './types';
import P from '../components/P';
import {W} from '../utils';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const renderTabIcon = (
    icon: any,
    focused: boolean,
    name: string,
    isScan?: boolean,
  ) => (
    <View style={[styles.iconContainer, isScan && styles.scanContainer]}>
      <Image
        source={icon}
        style={[
          styles.icon,
          isScan
            ? styles.scanIcon
            : {
                tintColor: focused ? colors.primary : 'rgba(189, 189, 189, 1)',
              },
        ]}
        resizeMode="contain"
      />
      {!isScan && (
        <View style={styles.labelContainer}>
          <P
            size="s4"
            color={focused ? colors.primary : 'rgba(151, 151, 152, 1)'}
            mt={4}
            numberOfLines={1}
            style={styles.label}>
            {name}
          </P>
        </View>
      )}
    </View>
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              require('../assets/pngs/bottomTabIcons/home.png'),
              focused,
              'Home',
            ),
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              require('../assets/pngs/bottomTabIcons/diagnose.png'),
              focused,
              'Diagnose',
            ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              require('../assets/pngs/bottomTabIcons/scan.png'),
              focused,
              'Scan',
              true,
            ),
        }}
      />
      <Tab.Screen
        name="MyGarden"
        component={MyGardenScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              require('../assets/pngs/bottomTabIcons/myGarden.png'),
              focused,
              'Garden',
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            renderTabIcon(
              require('../assets/pngs/bottomTabIcons/profile.png'),
              focused,
              'Profile',
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopWidth: 0,
    elevation: 0,
    height: 85,
    paddingBottom: 20,
    paddingTop: 12,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    gap: 4,
    paddingHorizontal: 4,
  },
  scanContainer: {
    backgroundColor: colors.primary,
    width: W(14),
    height: W(14),
    borderRadius: W(7),
    position: 'absolute',
    bottom: 10,
    borderWidth: 4,
    borderColor: '#2CCC80',
  },
  icon: {
    width: W(6),
    height: W(6),
  },
  scanIcon: {
    width: W(7),
    height: W(7),
    tintColor: colors.white,
  },
  labelContainer: {
    alignItems: 'center',
    gap: 4,
  },
  label: {
    textAlign: 'center',
    width: W(16),
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: 4,
    height: 4,
    borderRadius: 2,
  },
});

export default TabNavigator;
