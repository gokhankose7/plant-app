import type {NavigatorScreenParams} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type TabParamList = {
  Home: undefined;
  Diagnose: undefined;
  Scan: undefined;
  MyGarden: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Onboarding: undefined;
  Paywall: undefined;
  TabNavigator: NavigatorScreenParams<TabParamList>;
  Diagnose: undefined;
  Scan: undefined;
  MyGarden: undefined;
  Profile: undefined;
  Home: undefined;
};
